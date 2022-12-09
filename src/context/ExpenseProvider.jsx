import { useState } from 'react';
import { ExpenseContext } from './ExpenseContext';

export const ExpenseProvider = ({ children }) => {
	const [expenseAllocation, setExpenseAllocation] = useState();
	const [expenses, setExpenses] = useState();
	const [resumeExpense, setResumeExpense] = useState(false);
	const handleExpenseAllocation = (newExpense) => {
		setExpenseAllocation({
			...expenseAllocation,
			newExpense,
		});
	};
	const handleExpenses = (expense) => {
		setExpenses(expense);
	};

	return (
		<ExpenseContext.Provider
			value={{
				expenseAllocation,
				resumeExpense,
				expenses,
				handleExpenseAllocation,
				setResumeExpense,
				handleExpenses,
			}}
		>
			{children}
		</ExpenseContext.Provider>
	);
};
