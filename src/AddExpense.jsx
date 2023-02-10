// Imports
import React, { useRef, useState } from 'react';
import './tracking.css';

// Element
function AddExpense(props) {

    // States
    let [value, setValue] = useState('');
    const [cost, setCost] = useState(0);

    const valueInput = useRef(null);

    // Store the Category which is Active
    let activeCategory = props.activeCategory;

    // Store the new Expense
    function storeExpense() {

        value = value.trim();
        if (!value || Number.isNaN(cost)) return;

        // Call the Function to store a new Expense
        // which is contained in the Container Component
        props.handleAddNewExpense({ value, cost, activeCategory });

        // Reset the States
        setValue('');
        setCost(0);

        // Trigger the Focus on the Value Input again
        valueInput.current.focus();
        
    }

    // Handle the Submit on the 'Add new' Button
    function handleSubmit() {

        // Determine if the inserted values are valid
        // and, if so, store the new Expense
        storeExpense();

    }

    // Handle the 'Enter' Key pressed on one of the Inputs
    function handleEnterKey(event) {

        if (event.key !== 'Enter') return;

        // Determine if the inserted values are valid
        // and, if so, store the new Expense
        storeExpense();

    }

    // Render the Element
    return (

        <section className="tracking-container__add">

            <input
                ref={ valueInput }
                placeholder="Bought flowers, earnt salary..."
                type="text"
                name="value"
                value={ value }
                onChange={ (e) => setValue(e.currentTarget.value) }
                onKeyDown={ handleEnterKey }
            />

            <input
                placeholder="Amount"
                type="number"
                name="cost"
                value={ cost }
                onChange={ (e) => setCost(e.currentTarget.value) }
            />

            <button
                type="button"
                name="cost"
                onClick={ handleSubmit }
            >Add new</button>

        </section>

    );

}

// Export the Element
export default AddExpense;