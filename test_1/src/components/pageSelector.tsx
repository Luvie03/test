import React, { useState } from "react";
import Checkbox from "./checkbox";
import Button from "./button";

const PageSelector: React.FC = () => {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedPages(pages); // Select all pages
    } else {
      setSelectedPages([]); // Deselect all pages
    }
  };

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const page = event.target.value;
    if (selectedPages.includes(page)) {
      // If the page is already selected, remove it from the array
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      // If the page is not selected, add it to the array
      setSelectedPages([...selectedPages, page]);
    }
  };

  const isAllSelected = selectedPages.length === pages.length;

  return (
    <div className="p-4 flex flex-col min-w-[370px] min-h-[326px] border rounded-[6px] shadow-md">
      <Checkbox
        id="select-all"
        checked={isAllSelected}
        onChange={handleSelectAll}
        label="All Pages"
      />
      <hr className="my-2 border-t border-gray-300" />
      {pages.map((page, index) => (
        <Checkbox
          key={index}
          id={`page-${index + 1}`}
          checked={selectedPages.includes(page)}
          onChange={handlePageChange}
          label={page}
          value={page} // Pass the page name as the value
        />
      ))}
      <hr className="my-2 border-t border-gray-300 mb-4" />
      <Button />
    </div>
  );
};

export default PageSelector;
