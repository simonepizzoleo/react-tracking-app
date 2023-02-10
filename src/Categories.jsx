// Imports
import React from 'react';
import './tracking.css';

// Element
function Categories(props) {

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
    return <ul className="tracking-container__categories"> { CATEGORIES } </ul>;

}

// Export the Element
export default Categories;