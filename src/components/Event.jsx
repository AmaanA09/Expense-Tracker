import React, { useState } from "react";
import foodLogo from "../assets/fluent-emoji-high-contrast_pizza.svg";
import healthLogo from "../assets/healthicons_health-outline.svg";
import groceriesLogo from "../assets/shopping.svg";
import bagLogo from "../assets/travel.svg";
import fileLogo from "../assets/document.png"

function EventComponent({
  setExpenseModal,
  setBudgetModal,
  handleButtons,
  handleSearch,
  handleAllData,
  isActive,
  setActiveCategory
}) {
   // Track active category

  // Handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set active category
    handleButtons(category); // Call the handleButtons function to filter data
  };

  return (
    <>
      <div className="event-wrapper">
      <div className="category-btn-container">
        <div className="event-btn">
        <input
          type="text"
          placeholder="search"
          className="search-bar"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />

        {/* All Expenses button */}
        <button
          className={`category-btn ${isActive === "" ? "active" : ""}`} // Add active class conditionally
          onClick={() => {
            setActiveCategory(""); // Reset active category to show all expenses
            handleAllData();
          }}
        >
          <img src={fileLogo} alt="food logo" /> All Expenses
        </button>
        </div>
        
        <div className="event-btn">
        {/* Food & Drinks button */}
        <button
          className={`category-btn ${isActive === "Food & Drinks" ? "active" : ""}`} // Add active class for 'Food & Drinks'
          onClick={() => handleCategoryClick("Food & Drinks")}
        >
          <img src={foodLogo} alt="food logo" /> Food & Drinks
        </button>

        {/* Groceries button */}
        <button
          className={`category-btn ${isActive === "Groceries" ? "active" : ""}`} // Add active class for 'Groceries'
          onClick={() => handleCategoryClick("Groceries")}
        >
          <img src={groceriesLogo} alt="groceries logo" /> Groceries
        </button>
        </div>

        <div className="event-btn">
        {/* Travel button */}
        <button
          className={`category-btn ${isActive === "Travel" ? "active" : ""}`} // Add active class for 'Travel'
          onClick={() => handleCategoryClick("Travel")}
        >
          <img src={bagLogo} alt="travel logo" /> Travel
        </button>

        {/* Health button */}
        <button
          className={`category-btn ${isActive === "Health" ? "active" : ""}`} // Add active class for 'Health'
          onClick={() => handleCategoryClick("Health")}
        >
          <img src={healthLogo} alt="health logo" /> Health
        </button>
        </div>
        
      </div>
      <div className="adding-btn-div">
        {/* Add Budget button */}
        <button className="adding-btn" onClick={() => setBudgetModal(true)}>
          <span>+</span> Add Budget
        </button>

        {/* Add Expense button */}
        <button className="adding-btn" onClick={() => setExpenseModal(true)}>
          <span>+</span> Add Expense
        </button>
      </div>
      </div>
    </>
  );
}

export default EventComponent;
