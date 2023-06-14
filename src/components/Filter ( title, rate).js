import React, { useState } from "react";
function Filter({ onFilter }) {
  const [title, setTitle] = useState(" ");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}
export default Filter;