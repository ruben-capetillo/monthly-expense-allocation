import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { ExpenseAllocation } from './ExpenseAllocation';
import { ResumeExpenseAllocation } from './ResumeExpenseAllocation';

export const Header = () => {
	const { resumeExpense } = useContext(ExpenseContext);
	return (
		<header className="header">
			<h1 className="header__title">Monthly Expense Allocation</h1>
			{resumeExpense ? <ResumeExpenseAllocation /> : <ExpenseAllocation />}
		</header>
	);
};
