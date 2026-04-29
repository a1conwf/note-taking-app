import { create } from "zustand";

import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";

import { ROUTES } from "@/constants/routes";

interface AuthStore {
	user: User | null;
	isLoading: boolean;
	isInitialized: boolean;

	init: () => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	loginWithGoogle: () => Promise<void>;
	signup: (email: string, password: string) => Promise<void>;
	forgotPassword: (email: string) => Promise<void>;
	resetPassword: (password: string) => Promise<void>;
	logout: () => Promise<void>;
}

let isAuthListenerRegistered = false;

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	isLoading: false,
	isInitialized: false,

	init: async () => {
		set({ isLoading: true });

		try {
			if (!isAuthListenerRegistered) {
				isAuthListenerRegistered = true;

				supabase.auth.onAuthStateChange((_event, session) => {
					set({ user: session?.user ?? null, isInitialized: true });
				});
			}

			const { data, error } = await supabase.auth.getSession();

			if (error) {
				throw error;
			}

			set({ user: data.session?.user ?? null });
		} finally {
			set({ isLoading: false, isInitialized: true });
		}
	},

	login: async (email: string, password: string) => {
		set({ isLoading: true });

		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) {
				throw error;
			}

			set({ user: data.session?.user ?? null });
		} finally {
			set({ isLoading: false });
		}
	},

	loginWithGoogle: async () => {
		set({ isLoading: true });

		try {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${window.location.origin}${ROUTES.HOME}`,
				},
			});

			if (error) {
				throw error;
			}

			window.location.href = data.url;
		} finally {
			set({ isLoading: false });
		}
	},

	signup: async (email: string, password: string) => {
		set({ isLoading: true });

		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
			});

			if (error) {
				throw error;
			}

			set({ user: data.user });
		} finally {
			set({ isLoading: false });
		}
	},

	forgotPassword: async (email: string) => {
		set({ isLoading: true });

		try {
			const { error } = await supabase.auth.resetPasswordForEmail(email, {
				redirectTo: `${window.location.origin}${ROUTES.RESET_PASSWORD}`,
			});

			if (error) {
				throw error;
			}
		} finally {
			set({ isLoading: false });
		}
	},

	resetPassword: async (password: string) => {
		set({ isLoading: true });

		try {
			const { data, error } = await supabase.auth.updateUser({
				password,
			});

			if (error) {
				throw error;
			}

			set({ user: data.user });
		} finally {
			set({ isLoading: false });
		}
	},

	logout: async () => {
		set({ isLoading: true });

		try {
			const { error } = await supabase.auth.signOut();

			if (error) {
				throw error;
			}

			set({ user: null });
		} finally {
			set({ isLoading: false });
		}
	},
}));
