export const currencyHelper = (currency) => {
	return currency.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};
