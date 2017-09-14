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
// var Tab = require('./tab')
// var Routes=React.createClass({
// 	configureScence:function(){
// 		return Navigator.SceneConfig.FloatFromRight;
// 	},
// 	readerScene:function(route,navigator){
// 		let Component=route.component;
// 		return <Component route={route} navigator={navigator} />
// 	},
// 	render:function(){
// 		var renderScene=this.renderSceneAndroid;
// 		var configureScence = this.configureScenceAndroid;
// 		return(
// 			<Navigator
// 				initialRoute={{name:'主页',component:Tab}}
// 				configureScence={this.configureScence}
// 				readerScene={this.readerScene}
// 			/>
// 		);
// 	}
// });
// module.exports = Routes;

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome world',
	};
	render() {
		const {
			navigate
		} = this.props.navigation;
		return (
			<View>
				<Text>Hello,Navigation!</Text>
			</View>
		);
	}
}

class ChatScreen extends React.Component {
	static navigationOptions = ({
		navigation
	}) => ({
		title: 'Chat with river',
	});
	render() {
		// const {
		// 	params
		// } = this.props.navigation.state;
		return (
			<View>
        		<Text>Chat with river</Text>
      		</View>
		);
	}
}

export
default class MainComponent extends Component {
	render() {
		return (
			<Navigator/>
		);
	}
}

const TabRouteConfigs = {
	Home: {
		screen: HomeScreen,
		navigationOptions: ({
			navigation
		}) => ({
			tabBarLabel: '首页',
			tabBarIcon: ({
				focused,
				tintColor
			}) => (
				//<TabBarItem
						//tintColor={tintColor}
						//focused={focused}
						//normalImage={require('./images/tab/tab_contact_n.png')}
						//selectedImage={require('./images/tab/tab_contact_p.png')}
					///>
				<Image
		        source={require('./images/tab/tab_contact_n.png')}
		        style={[styles.icon, {tintColor: tintColor}]}
		      />
			),
		}),
	},
	Chat: {
		screen: ChatScreen,
		navigationOptions: {
			tabBarLabel: '附近',
			tabBarIcon: ({
				focused,
				tintColor
			}) => (
				// <TabBarItem
						//tintColor={tintColor}
						//focused={focused}
						//normalImage={require('./images/tab/tab_discovery_n.png')}
						//selectedImage={require('./images/tab/tab_discovery_p.png')}
					///>

				<Image
		        source={require('./images/tab/tab_discovery_n.png')}
		        style={[styles.icon, {tintColor: tintColor}]}
		      />
			),
		},
	}


};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const TabNavigatorConfigs = {
	initialRouteName: 'Home',
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	lazy: true,
}
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
	Tab: {
		screen: Tab
	}
};
const StackNavigatorConfigs = {
	initialRouteName: 'Tab',
	navigationOptions: {
		title: '标题',
		headerStyle: {
			backgroundColor: '#5da8ff'
		},
		headerTitleStyle: {
			color: '#333333'
		}
	}
};


const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
// const SimpleApp = StackNavigator({
// 	Home: {
// 		screen: HomeScreen
// 	},
// 	Chat: {
// 		screen: ChatScreen
// 	}
// });
//module.exports = SimpleApp;
// export
// default Navigator;