import { useState } from 'react';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { useForm } from '../hooks/useForm';
import { roles } from '../utils/roles';

export const ExpenseAllocation = () => {
	const [checkedState] = useState(new Array(roles.length).fill(false));
	const { handleExpenseAllocation, setResumeExpense } =
		useContext(ExpenseContext);

	const { onInputChange, area } = useForm({
		area: '',
	});

	const [rolesState, setRolesState] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (area.trim().length < 3 || rolesState.length === 0) return;
		setResumeExpense(true);
		handleExpenseAllocation({ roles: rolesState, area });
	};

	const handleCheck = ({ target }, rolesChecked) => {
		if (target.checked) {
			setRolesState([
				...rolesState,
				{ id: rolesChecked.id, rolName: rolesChecked.name, amount: 0 },
			]);
		} else {
			setRolesState(rolesState.filter((e) => e !== target.value));
		}
	};

	return (
		<div className="container-expense container defshadow">
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__field">
					<label>Ingresa el nombre del área</label>
					<input
						type="text"
						className="form__expense"
						name="area"
						placeholder="Ingresa el nombre del área"
						value={area}
						onChange={onInputChange}
					/>
					<h3>Selecciona que roles tiene el área</h3>
					<ul>
						{roles.map((rol) => (
							<li key={rol.id}>
								<div>
									<div>
										<input
											type="checkbox"
											id={rol.id}
											name={rol.name}
											value={rol.name}
											checked={checkedState[rol.id]}
											onChange={(e) => handleCheck(e, rol)}
										/>
										<label htmlFor={rol.id}>{rol.name}</label>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
				<input type="submit" value="Crear área" />
			</form>
		</div>
	);
};
