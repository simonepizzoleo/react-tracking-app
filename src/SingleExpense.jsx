// Imports
import React from 'react';
import './tracking.css';

// Element
function SingleExpense(props) {

    let expenseCssClass = (props.expense?.cost < 0) ? 'negative' : 'positive';
    expenseCssClass = (props.expense?.cost) ? expenseCssClass : '';
    
    const expenseIcon = (props.expense?.cost < 0) ? '😢' : '💵';
    
    // Render the Element
    return (

        <li className={ `tracking-container__expense ${expenseCssClass}` }>

            <div className={`tracking-container__expense-icon`}> { (props.expense?.cost) ? expenseIcon : '👀' } </div>
            
            <article className="tracking-container__expense-content">
                <h3 className="tracking-container__expense-title"> { props.expense?.value ? props.expense.value : props.title } </h3>
                <span className="tracking-container__expense-cost"> { props.expense?.cost ? `${props.expense.cost} $` : props.description } </span>
            </article>

        </li>

    );

}

// Export the Element
export default SingleExpense;