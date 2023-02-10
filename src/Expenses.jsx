// Imports
import React from 'react';
import SingleExpense from './SingleExpense';
import './tracking.css';

// Element
function Expenses(props) {

    // Map the Expenses
    let activeExpenses = props.expenses.filter(expense => {
        return expense.categoryId === props.activeCategory;
    });

    // Determine the Markup of the Expense
    activeExpenses = activeExpenses.map(expense => {

        return (
        
            <SingleExpense
                key={ expense.id }
                expense={ expense }
            />
        
        );

    });

    // If there aren't any Expenses to show,
    // just return nothing
    const NO_EXPENSES_TO_SHOW = props.expenses.find(expense => {
        return expense.categoryId === props.activeCategory;
    });

    if (NO_EXPENSES_TO_SHOW === undefined) {
        
        return (

            <section className="tracking-container__expenses">

                <SingleExpense
                    title={ `There's nothing to see in ! ` }
                    description="Add an Expense below to start seeing your payments and earnings."
                />

            </section>

        );

    }

    // Render the Element
    return <section className="tracking-container__expenses"> { activeExpenses } </section>;

}

// Export the Element
export default Expenses;