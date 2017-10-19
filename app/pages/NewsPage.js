import React,{Component} from 'react';
import {	
	ListView,
	Image,
	RefreshControl,
	ActivityIndicator,
	ProgressBarAndroid,
	TouchableOpacity,
	Navigator,
	TouchableNativeFeedback,
Dimensions,AsyncStorage,Platform,StyleSheet,View,Text,TouchableHighlight} from 'react-native'

import  ScrollableTabView , { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Api from '.././service/dataService'
import {NEWS_CATEGORY_NET_DATA} from '.././common/constant'
import NewsListPage from '../pages/NewsListPage'
export default class NewsPage extends Component{

	constructor(props){
		super(props);
		const ds  = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state={
			refreshing:false,
			dataSource:ds
		};
	}
	
	

	
	
	// _onRefresh(){
 	// this.setState({refreshing:true});
	// 	setTimeout(()=>{
 	// 	Api.getList()
	// 	.then((responseData)=>{
	// 		this.setState({
	// 			refreshing:false,
	// 			dataSource:this.state.dataSource.cloneWithRows(responseData.data)
	// 		});
	// 	}).done();
	// 	},5000);

		
	// }

	render(){
		 var progressBar =
		   <View>
		      <ProgressBarAndroid styleAttr="Inverse"/>
		    </View>; 
		return(
				<View>
					{/* <ActionBar
					 title={"新闻"}
					/> */}
					<ScrollableTabView
						tabBarPosition='top'
						tabBarUnderlineStyle={{backgroundColor:'#03a8fs',height:2}}
						tabBarBackgroundColor='#ffffff'
						tabBarUnderlineColor='#03a8f4'
						tabBarActiveTextColor='#9b9b9b'
						scrollWithoutAnimation={false}
						tabBarTextStyle={{fontSize:14}}
						initialPage={this._currentPage(this.props.key)}
						renderTabBar={()=><ScrollableTabBar/>}
					>
					{this._renderTabPage}
					</ScrollableTabView>
				</View>
			);
	}

	_currentPage(curKey){
		let index = 0;
		for(let i=0;i<NEWS_CATEGORY_NET_DATA.length;i++){
			if(NEWS_CATEGORY_NET_DATA[i].key == curKey){
				index = i;
				break;
			}
		}
		return index;
	}
	_renderTabPage(){
		let pages = [];
		for(let i=0;i<NEWS_CATEGORY_NET_DATA.length;i++){
			pages.push(
				<NewsListPage
				key={NEWS_CATEGORY_NET_DATA[i].key}
				tabLabel = {NEWS_CATEGORY_NET_DATA[i].title}
				/>
			)
		}

		return pages;
	}

}


const styles=StyleSheet.create({
	lvRow:{
		flex:1,
		flexDirection:'row',
		padding:10,
	},
	textView:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		padding:5
	},
	textTitle:{
		flex:1,
		textAlign:'center',
		color:'#f00'
	},
	textContent:{
		flex:1,
		fontSize:11,
		color:'#000',
		textAlign:'center',
	},
	img:{
		height:55,
		width:100,
	}

});
