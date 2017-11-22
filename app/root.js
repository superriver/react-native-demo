import React,{Component} from 'react';

import Navigator from './NavigatorRoute'

import {Provider} from 'react-redux'
import configureStore from './ConfigureStore'

const store = configureStore();
export default class MainComponent extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigator/>
			</Provider>
		);
	}
}