// Imports
import React, { useState } from 'react';
import './tracking.css';

// Element
function AddCategoryPopup(props) {

    // Handle the Input
    function handleInput(e) {

        let value = e.target.value;
        value = value.trim();

    }

    // Render the Element
    document.addEventListener('keydown', (event) => {
        
        if (event.key !== 'Escape') return;
        props.closePopup();
    
    });

    if (props.popupState === false) return;

    return (

        <div className="add-category-popup__overlay">

            <div className="add-category-popup">

                <div
                    className="add-category-popup__close"
                    onClick={ props.closePopup }
                    onKeyDown={ (event) => (event.key === 'Escape') ? props.closePopup : '' }
                >Close</div>

                <h2 className="add-category-popup__heading">Choose a name for your new Category</h2>
                
                <input
                    className="add-category-popup__input"
                    type="text"
                    placeholder="Shopping, Sports, Clothing..."
                    onInput={ (e) => handleInput(e) }
                />

            </div>

        </div>

    );

}

// Export the Element
export default AddCategoryPopup;