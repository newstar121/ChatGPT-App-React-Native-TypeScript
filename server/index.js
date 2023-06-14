import express from 'express';
import cors from 'cors';
import { environment } from './config.js';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

const configuration = new Configuration({
	// organization: environment.OPENAI_ORGANIZATION,
	apiKey: environment.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const idRandonAvatar = Math.floor(Math.random() * 100);

app.post('/api/chat', async (req, res) => {
	const { message, model, max_tokens, temperature } = req.body;

	console.log('\n\nInput: ', req.body);

	if (message === '') {
		console.log('No message provided');
		res.json({
			data: 'No message provided',
		});
	}

	if (message !== '') {
		try {
			// const response = await openai.createCompletion({
			// 	model: model || 'text-davinci-003',
			// 	prompt: message,
			// 	max_tokens: max_tokens || 100,
			// 	temperature: temperature || 0.5,
			// })
			console.log('apiKey', configuration.apiKey);
			const response = await axios({
				method: 'post',
				url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${configuration.apiKey}`
				},
				data: {
					prompt: message,
					temperature: temperature || 0.7,
					max_tokens: max_tokens || 3000,
					top_p: 1.0,
					frequency_penalty: 0.7,
					presence_penalty: 0.0,
					n: 1
				}
			});

			console.log('get response data', response);
			const data = {
				id: response.data.id,
				create: response.data.created,
				model: response.data.model,
				text: response.data.choices[0].text.replace("\n\n", ""),
				usage: response.data.usage,
				user: {
					name: 'chatgpt',
					// avatar: 'https://i.pravatar.cc/100?img=' + idRandonAvatar,
				}
			}

			res.json({
				data: data,
			});

			console.log('\n\nOutput: ', response.data);
		} catch (error) {
			console.log('chatgpt createCompletion error', error)
		}
	}

});

app.listen(port, () => {
	console.log(`Example app listening at http://65.108.142.188:${port}`);
});
