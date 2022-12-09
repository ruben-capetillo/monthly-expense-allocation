import React, { useContext } from 'react';
import { useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

export const ResumeExpenseAllocation = () => {
	const {
		expenseAllocation: { newExpense },
		handleExpenses,
		setResumeExpense,
	} = useContext(ExpenseContext);
	const { roles, area } = newExpense;
	const [rolesState, setRolesState] = useState(roles);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			rolesState.some(
				(item) => item.amount === '' || item.amount === 0 || isNaN(item.amount)
			)
		)
			return;
		handleExpenses(rolesState);
	};

	const onInputChange = (target, index) => {
		let data = [...rolesState];
		data[index].amount = target.value;
		setRolesState(data);
	};

	const handleReset = () => {
		handleExpenses(null);
		setResumeExpense(false);
	};

	return (
		<>
			<div className="container-expense container defshadow">
				<form className="form" onSubmit={handleSubmit}>
					<div className="form__field">
						<label>Ingresa los datos para elárea {area}</label>
						{roles.map((item, index) => (
							<div key={item.id}>
								<label>Reporte de gastos de {item.rolName}</label>
								<input
									type="text"
									className="form__expense"
									name={item.rolName}
									placeholder="Ingresa el monto"
									value={item.amount}
									onChange={({ target }) => onInputChange(target, index)}
								/>
							</div>
						))}
					</div>
					<input
						type="submit"
						value="Registrar montos"
						onClick={handleSubmit}
					/>
					<input
						className="reset-app"
						type="button"
						value="Calcular costos de otra área"
						onClick={handleReset}
					/>
				</form>
			</div>
		</>
	);
};
