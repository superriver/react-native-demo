
import React, {
	Component
} from 'react';

import {
	AppRegistry,
	StyleSheet,
	BackAndroid,
	Image,
	Text,
	View,
	Button,
	StatusBar
} from 'react-native';

import {
	StackNavigator,
	TabBarBottom,
	TabNavigator
} from 'react-navigation';

import HomeComponent from '.././page/home'

export default class HomeScreen extends React.Component {
	constructor(props){
		super(props);
	}
	static navigationOptions = {
		title: 'Welcome world',
	};
	render() {
		const {
			navigate
		} = this.props.navigation;
		return (
					<View>
						<HomeComponent {...this.props}/>
					</View>
		);
	}
}