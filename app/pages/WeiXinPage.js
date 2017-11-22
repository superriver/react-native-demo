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
	TouchableNativeFeedback,
	StatusBar,Dimensions,TouchableOpacity,ListView
} from 'react-native';

import {
	StackNavigator,
	TabBarBottom,
	TabNavigator
} from 'react-navigation';

import {connect} from 'react-redux'
import GridView from '../components/GridView'
import {fetchWeiXinList} from '../actions/WeixinAction'
import ItemWeiXinNewsView from './ItemWeiXinNewsView'
let {height, width} = Dimensions.get('window');
class WeiXinScreen extends Component {


	componentDidMount(){
		this.props.dispatch(fetchWeiXinList(1, 10));
	}

	render() {
		const {weiXin} = this.props;
		let listData = weiXin.newsList === undefined ? [] : weiXin.newsList;
		return (
			<View>
         <GridView
              items={Array.from(listData)}
							itemsPerRow={2}
              renderItem={this._renderRow.bind(this)}
            />
      		</View>
		);
	}

	
	_renderRow(bean){
		if (bean) {
      return (
        <ItemWeiXinNewsView
          key={bean.title}
          bean={bean}
         />
      );
    }
	}

}

 function mapStateToProps(state) {
	const { weiXin } = state;
  return {
    weiXin,
  }
 }
	
 export default connect(mapStateToProps)(WeiXinScreen);

const styles = StyleSheet.create({
	itemContainer: {
	  backgroundColor: '#f8f8ff',
	  marginVertical: 4,
	  borderColor: '#dddddd',
	  borderStyle: null,
	  borderWidth: 0.5,
	  borderRadius: 2,
	  width: 165,
	  marginLeft: (width - 164 * 2) / 4, //(屏幕宽度-两个item宽度)/4=边缘margin
	  marginRight: (width - 164 * 2) / 4,
	},
  
	itemIcon: {
	  width: 163.5,
	  height: 113,
	  backgroundColor: '#e9e9e9',
	},
  
	itemDescription: {
	  flex: 1,
	  margin: 5,
	},
  
	rowContainer: {
	  padding: 0,
	  flex: 1,
	  flexDirection: 'row',
	},
  
	itemTitle: {
	  color: '#535252',
	  fontSize: 14,
	  flex: 1,
	},
  
	ctime: {
	  flex: 1,
	  textAlign: 'left',
	  fontSize: 10,
	},
  
	description: {
	  flex: 1,
	  textAlign: 'right',
	  fontSize: 10,
	},
  });