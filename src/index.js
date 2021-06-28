import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import messages from './translations/messages-en.json';

export function flattenMessages(nestedMessages = {}, prefix = '') {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		const value = nestedMessages[key];
		const prefixedKey = prefix ? `${prefix}.${key}` : key;
		if (typeof value === 'string') {
			messages[prefixedKey] = value;
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey));
		}
		return messages;
	}, {});
}

const flattenMessage = flattenMessages(messages);

ReactDOM.render(
	<React.StrictMode>
		<IntlProvider locale="en" messages={flattenMessage}>
			<App />
		</IntlProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
