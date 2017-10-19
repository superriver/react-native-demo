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


export default class WeiXinScreen extends React.Component {
	static navigationOptions = ({
		navigation
	}) => ({
		title: 'WeiXinScreen',
	});
	render() {
		// const {
		// 	params
		// } = this.props.navigation.state;
		return (
			<View>
        		<Text>WeiXinScreen</Text>
      		</View>
		);
	}
}
