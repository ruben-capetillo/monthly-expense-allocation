import React from 'react';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { currencyHelper } from '../helpers/currencyHelper';
import { Expenses } from './Expenses';

export const ListRecordedExpenses = () => {
	const { expenses } = useContext(ExpenseContext);
	return (
		<div className="list-expenses container">
			{expenses ? (
				expenses.map((item) => <Expenses key={item.id} item={item} />)
			) : (
				<h2>Aún no hay gastos registrados</h2>
			)}
			{expenses && (
				<div className="expense defshadow">
					<div className="expense-content">
						<div className="expense-resume">
							<p className="expense-allocation">
								Total de gastos del departamento:
								{currencyHelper(
									expenses.reduce(
										(acum, current) => acum + Number(current.amount),
										0
									)
								)}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
