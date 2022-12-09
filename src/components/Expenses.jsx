import React from 'react';
import { currencyHelper } from '../helpers/currencyHelper';

export const Expenses = ({ item }) => {
	return (
		<>
			<div className="expense defshadow">
				<div className="expense-content">
					<div className="expense-resume">
						<p className="departament">{item.rolName}</p>
						<p className="expense-allocation">
							{currencyHelper(Number(item.amount))}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
