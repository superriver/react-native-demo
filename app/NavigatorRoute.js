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



//import HomeDetailComponent from './page/home_detail'


import HomeScreen from './container/MainContainer'

import WeiXinScreen from './pages/WeiXinPage'

import NewsScreen from './pages/NewsPage'

const TabRouteConfigs = {
	Main: {
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
	News: {
		screen: NewsScreen,
		navigationOptions: ({
			navigation
		}) => ({
			tabBarLabel: '新闻',
			tabBarIcon: ({
				focused,
				tintColor
			}) => (
				<Image
		        source={require('./images/tab/tab_messagecenter_n.png')}
		        style={[styles.icon, {tintColor: tintColor}]}
		      />
			),
		}),
	},
	WeiXin: {
		screen: WeiXinScreen,
		navigationOptions: {
			tabBarLabel: '微信精选',
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
	initialRouteName: 'Main',
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	lazy: true,
}
const TabContainer = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);


const StackRouteConfigs = {
	Main: {
		screen: TabContainer,
		navigationOptions: {
        headerLeft: null
      }
	},

	// List_Detail:{
	// 	screen: HomeDetailComponent
	// }
};
const StackNavigatorConfigs = {
	initialRouteName: 'Main',
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


export default Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

// const SimpleApp = StackNavigator({
// 	Home: {
// 		screen: HomeScreen
// 	},
// 	Chat: {
// 		screen: ChatScreen
// 	}
// });
//module.exports = SimpleApp;
 