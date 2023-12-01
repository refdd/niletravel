import React from "react";
import SearchBox from "./SearchBox";
import SearchContent from "./SearchContent";

function SearchSection() {
  return (
    <div className="container mx-auto px-4  pt-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <SearchBox />
        <SearchContent />
      </div>
    </div>
  );
}

export default SearchSection;
