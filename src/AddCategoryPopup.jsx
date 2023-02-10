// Imports
import React, { useState } from 'react';
import './tracking.css';

// Element
function AddCategoryPopup(props) {

    let [name, setName] = useState('');

    // Handle the Submit
    function handleSubmit() {
        
        let categoryName = name.trim();
        
        // If the Name is invalid
        if (!categoryName || categoryName === '') return;

        // Add the new Category
        props.addNewCategory(categoryName);

        // Reset the State
        setName('');

        // Close the Popup
        props.closePopup();
    
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
                
                <div className="add-category-popup__flexbox">

                    <input
                        className="add-category-popup__input"
                        type="text"
                        placeholder="Shopping, Sports, Clothing..."
                        value={ name }
                        onInput={ (e) => setName(e.currentTarget.value) }
                        onKeyDown={ (event) => (event.key === 'Enter') ? handleSubmit() : '' }
                    />

                    <button
                        className="add-category-popup__button"
                        type="button"
                        onClick={ handleSubmit }
                    >Add new</button>

                </div>

            </div>

        </div>

    );

}

// Export the Element
export default AddCategoryPopup;