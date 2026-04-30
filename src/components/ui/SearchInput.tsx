import React from "react";

import iconSearch from "@/assets/icon-search.svg";

const SearchInput: React.FC = () => {
	return (
		<div className="w-[300px] flex items-center gap-2 pl-4 py-3 border border-neutral-300 rounded-lg">
			<img src={iconSearch} alt="search-icon" className="w-4 h-4" />

			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search by title, content, or tags..."
				className="flex-1 outline-none text-preset-5 text-neutral-950 placeholder:text-neutral-500"
				autoComplete="off"
			/>
		</div>
	);
};

export default SearchInput;
