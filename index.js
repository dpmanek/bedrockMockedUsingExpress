const express = require('express');
const cors = require('cors');

const app = express();
const port = 7000;

app.use(express.json());

// app.post('/', (req, res) => {
// 	res.send('POST request received');
// });
app.use(cors());
app.post('/chat2', (req, res) => {
	console.log('Received data:', req.body);
	res.json({ message: 'POST request received', data: req.body });
});
app.post('/chat', (req, res) => {
	console.log('Received data:', req.body);
	const responseData = [
		{
			text: 'Hi Deep Manek, How may I help you today?',
			component: {
				type: 'TextBox',
				label: 'How can we help?',
				validationRules: [
					{
						type: 'Required',
						message: 'Please let us know how we can help',
					},
				],
			},
			progress: 20,
		},
		{
			text: ' please create a strong password for your account. Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number.',
			component: {
				type: 'Password',
				label: 'Enter Password',
				validationRules: [
					{
						type: 'Required',
						message:
							'Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number.',
					},
				],
			},
			progress: 25,
		},
		{
			text: ' please enter your SSN.',
			component: {
				type: 'SSN',
				label: 'Enter SSN',
				validationRules: [
					{
						type: 'Required',
						message: 'SSN must be in the format ###-##-####',
					},
				],
			},
			progress: 28,
		},
		{
			text: 'Please provide your date of birth',
			component: {
				type: 'DatePicker',
				label: 'Date of Birth',
				validationRules: [
					{
						type: 'Required',
						message: 'Date of birth is required',
					},
					{
						type: 'CustomRule',
						message: 'Please enter a valid date that is not in the future',
						validate: (value) => {
							const selectedDate = new Date(value);
							const today = new Date();
							today.setHours(0, 0, 0, 0); // Reset time to start of day for fair comparison

							const twentyYearsAgo = new Date();
							twentyYearsAgo.setFullYear(today.getFullYear() - 20);
							return selectedDate <= twentyYearsAgo && selectedDate <= today;
						},
					},
				],
			},
			progress: 40,
		},
		{
			text: 'What is your annual income range?',
			component: {
				type: 'Select',
				label: 'Annual Income',
				options: [
					'Less than $30,000',
					'$30,000 - $50,000',
					'$50,000 - $75,000',
					'$75,000 - $100,000',
					'More than $100,000',
				],
				validationRules: [
					{
						type: 'Required',
						message: 'Annual income range is required',
					},
				],
			},
			progress: 55,
		},
		{
			text: 'What is your annual income range?',
			component: {
				type: 'Radio',
				label: 'Annual Income',
				options: [
					'< $30K',
					'$30K - $50K',
					'$50K - $75K',
					'$75K - $100K',
					'> $100K',
				],
				validationRules: [
					{
						type: 'Required',
						message: 'Annual income range is required',
					},
				],
			},
			progress: 65,
		},
		{
			text: 'Do you smoke or use tobacco products?',
			component: {
				type: 'Radio',
				label: 'Smoking Status',
				options: ['Yes', 'No'],
				validationRules: [
					{
						type: 'Required',
						message: 'Please select an option',
					},
				],
			},
			progress: 70,
		},
		{
			text: 'What is your occupation?',
			component: {
				type: 'TextBox',
				label: 'Occupation',
				validationRules: [
					{
						type: 'Required',
						message: 'Occupation is required',
					},
				],
			},
			progress: 85,
		},
		{
			text: 'What type of insurance coverage are you interested in?',
			component: {
				type: 'Select',
				label: 'Coverage Type',
				options: [
					'Term Life Insurance',
					'Whole Life Insurance',
					'Universal Life Insurance',
					'Variable Life Insurance',
					'Not sure - need more information',
				],
				validationRules: [
					{
						type: 'Required',
						message: 'Please select a coverage type',
					},
				],
			},
			progress: 100,
		},
	];
	res.json(responseData);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
