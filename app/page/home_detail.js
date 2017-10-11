import React,{Component} from 'react';
import{
	StyleSheet,
	Image,
	Text,
	View,
	Navigator,
	Dimensions,
	TouchableOpacity
} from 'react-native';

class List_Detail extends Component{

	constructor(props){
		super(props);
	}
	static navigationOptions = ({
		navigation
	}) => ({
		title: 'List_Detail',
	});

	render(){
		return(
				<View>
					<Text>详情页面</Text>
				</View>
			);
		
	}
}
module.exports= List_Detail;