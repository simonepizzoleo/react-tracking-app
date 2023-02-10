// Imports
import React from 'react';
import './tracking.css';

// Element
function Expenses(props) {

    // Map the Expenses
    let activeExpenses = props.expenses.filter(expense => {
        return expense.categoryId === props.activeCategory;
    });

    // Determine the Markup of the Expense
    activeExpenses = activeExpenses.map(expense => {

        const expenseCssClass = (expense.cost < 0) ? 'negative' : '';
        const expenseCost = (expense.cost < 0) ? '😢' : '💵';

        return (
        
            <li
                key={ expense.id }
                className={ `tracking-container__expense ${expenseCssClass}` }
            >

                <div className={`tracking-container__expense-icon`}> { expenseCost } </div>
                
                <article className="tracking-container__expense-content">
                    <h3 className="tracking-container__expense-title"> { expense.value } </h3>
                    <span className="tracking-container__expense-cost"> { expense.cost } $ </span>
                </article>

            </li>
        
        );

    });

    // If there aren't any Expenses to show,
    // just return nothing
    const NO_EXPENSES_TO_SHOW = props.expenses.find(expense => {
        return expense.categoryId === props.activeCategory;
    });

    if (NO_EXPENSES_TO_SHOW === undefined) return;

    // Render the Element
    return <section className="tracking-container__expenses"> { activeExpenses } </section>;

}

// Export the Element
export default Expenses;