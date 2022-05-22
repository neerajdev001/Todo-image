
import React, { useState } from "react";


const SearchBar = ({ images, setImages }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    setImages(
      images.filter((img) => img.data.name.toLowerCase().includes(term.trim()))
    );
  };

  return (
    <div>
    
    <form>
    <input className="search" style={{ boxShadow: "none" }}
    type="text"
    placeholder="Filter with file name"
    onChange={(e) => handleChange(e)}
    value={term}
/>
    
  </form>
   
    </div>
  );
};

export default SearchBar;
