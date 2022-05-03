import axios from "axios";

export class Services {

    static instance = axios.create({
		baseURL: 'http://localhost:4444',
		timeout: 1000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Custom-Header': 'foobar'
        }
	});

    static consoleError(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    }

}