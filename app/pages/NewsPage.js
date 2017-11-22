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

import  ScrollableTabView , { DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Api from '.././service/dataService'
import {FAKE_NEWS_CATEGORY_NET_DATA} from '.././common/constant'
import NewsListPage from '../pages/NewsListPage'


var ScreenWidth = Dimensions.get('window').width;
export default class NewsPage extends Component{
	static navigationOptions = ({
		navigation
	}) => ({
		title: 'News',
	});

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
					<ScrollableTabView
						style={styles.container}
						tabBarPosition='top'
						tabBarUnderlineStyle={styles.lineStyle}
						tabBarBackgroundColor='#ffffff'
						tabBarUnderlineColor='#03a8f4'
						tabBarActiveTextColor='#9b9b9b'
						scrollWithoutAnimation={false}
						tabBarTextStyle={{fontSize:14}}
						renderTabBar={()=><DefaultTabBar
							tabStyle={styles.tab} textStyle={styles.tabText}
						/>}
					>
					{

					FAKE_NEWS_CATEGORY_NET_DATA.map((category)=>{
						return <NewsListPage 
						categoryKey={category.key} 
						key={category.key}
						tabLabel={category.title}/>
						})
					}
					</ScrollableTabView>
			);
	}

	// _currentPage(curKey){
	// 	let index = 0;
	// 	for(let i=0;i<NEWS_CATEGORY_NET_DATA.length;i++){
	// 		if(NEWS_CATEGORY_NET_DATA[i].key == curKey){
	// 			index = i;
	// 			break;
	// 		}
	// 	}
	// 	return index;
	// }
	
	_renderTabPage(category){
		
	}

}


const styles=StyleSheet.create({
	constaner:{
		flex:1,
		marginTop:20
	},
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
	},
	lineStyle:{
		height:2,
		backgroundColor:'#FF0000'
	},
	 textStyle: {
         flex: 1,
         fontSize:20,
         marginTop:20,
         textAlign:'center',
     },
 tab: {
	paddingBottom: 0
	
  },
  tabText: {
    fontSize: 16
  },
});
