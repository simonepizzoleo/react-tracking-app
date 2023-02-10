// Imports
import React, { Component } from 'react';
import './tracking.css';
import uniqid from 'uniqid';

// Components
import Categories from './Categories';
import Expenses from './Expenses';
import AddExpense from './AddExpense';

// Element
class Container extends Component {

    // Constructor
    constructor(props) {
        
        super(props);

        // State
        this.state = {

            // Categories
            categories: [

                { id: uniqid('category-'), name: 'Housekeeping' },
                { id: uniqid('category-'), name: 'Food & Beverages' },
                { id: uniqid('category-'), name: 'Health' }
            
            ],

            // Tasks
            expenses: []

        };
    
    }

    // Set the first Category as Active
    componentDidMount() {

        if (this.state.categories.length <= 0) return;
        
        this.setState({
            activeCategory: this.state.categories[0].id
        });

    }

    // Handle the click onto a Category
    handleCategoryClick(categoryId) {
        
        this.setState({
            activeCategory: categoryId
        });

    }

    // Handle the 'Add new' Button to insert a new Expense
    handleAddNewExpense(expense) {
        
        // Store the passed information
        let { value, cost, activeCategory } = expense;

        const NEW_EXPENSE = {
            id: uniqid(),
            categoryId: activeCategory,
            value,
            cost: cost.toString()
        };

        this.setState({
            expenses: [...this.state.expenses, NEW_EXPENSE]
        });

    }

    // Add a new Category
    addNewCategory(name) {

        const NEW_CATEGORY = {
            id: uniqid(),
            name
        };

        this.setState({
            categories: [...this.state.categories, NEW_CATEGORY],
            activeCategory: NEW_CATEGORY.id
        });

    }

    // Render the Element
    render() {

        // Bind
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleAddNewExpense = this.handleAddNewExpense.bind(this);
        this.addNewCategory = this.addNewCategory.bind(this);

        // Return
        return (

            <section className="tracking-container">
                
                <Categories
                    categories={ this.state.categories }
                    activeCategory={ this.state.activeCategory }
                    handleCategoryClick={ this.handleCategoryClick }
                    addNewCategory={ this.addNewCategory }
                />

                <Expenses
                    expenses={ this.state.expenses }
                    activeCategory={ this.state.activeCategory }
                />

                <AddExpense
                    activeCategory={ this.state.activeCategory }
                    handleAddNewExpense={ this.handleAddNewExpense }
                />

            </section>

        );

    }

}

// Export the Element
export default Container;