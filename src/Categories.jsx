// Imports
import React, { useState } from 'react';
import AddCategoryPopup from './AddCategoryPopup';
import './tracking.css';

// Element
function Categories(props) {

    let [popupState, setPopupState] = useState(false);

    // Close the Popup
    function closePopup(e) {
        setPopupState(false);
    }

    // Map the Categories
    const CATEGORIES = props.categories.map((category, index) => {

        return (
            
            <li
                key={ category.id }
                className={ props.activeCategory === category.id ? 'active' : '' }
                onClick={ () => props.handleCategoryClick(category.id) }
            > { category.name } </li>
        
        );

    });

    // Render the Element
    return (

        <>
    
            <ul className="tracking-container__categories">
                
                { CATEGORIES }

                <li
                    className="add-new"
                    onClick={ () => setPopupState(true) }
                >+ New</li>


            </ul>
            
            <AddCategoryPopup
                popupState={ popupState }
                addNewCategory={ props.addNewCategory }
                closePopup={ closePopup }
            />

        </>

    );

}

// Export the Element
export default Categories;