const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1063b40e14msh33561872ed82a6dp1baa98jsn2523f1a9e04d',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}