import { Header } from './components/Header';
import { ListRecordedExpenses } from './components/ListRecordedExpenses';
import { ExpenseProvider } from './context/ExpenseProvider';

function App() {
	return (
		<ExpenseProvider>
			<Header />
			<ListRecordedExpenses />
		</ExpenseProvider>
	);
}

export default App;
