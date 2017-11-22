'use strict';

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

import Swiper from 'react-native-swiper2'
import {FAKE_BANNER_NET_DATA} from '../common/constant'

import Api from '../service/dataService'

export default class HomePage extends Component{
	
	constructor(props){
		super(props);
		const ds =
		this.state={
			images:[
				{imgurl:'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png'},
				
				{imgurl:'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png'},
				
				{imgurl:'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'}
			],
			dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
			swiperShow:false
		}
		this._renderHeaderView = this._renderHeaderView.bind(this);
		this._renderRow = this._renderRow.bind(this);
	}

	render(){
		return(
				<View>
						<ListView
						initialListSize={1}
						enableEmptySections={true}
						removeClippedSubviews={false}
						dataSource={this.state.dataSource}
						renderHeader={this._renderHeaderView.bind(this)}
						renderRow={this._renderRow}
						/>

				</View>
		)
	}
	

	componentDidMount(){
		setTimeout(()=>{
			this.setState({swiperShow:true});
		},500);

		Api.getHealthList()
		.then((responseData)=>{
			this.setState({
				dataSource:this.state.dataSource.cloneWithRows(responseData.newslist)
			})
		})
		.done();
	}

	_renderRow(rowData){
		return (
			<TouchableNativeFeedback>
				<View style={styles.lvRow}>
					<Image style={styles.img} source={{uri:(rowData.picUrl=='' ? 'defaults':rowData.picUrl)}}/>
					<View style={styles.textView}>
							<Text style={styles.textTitle} numberOfLines={1}>{rowData.title}</Text>
							<Text style={styles.textDate} >{rowData.ctime}</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		)
	}
	renderSwiper(images){
			return(<View style={{flex:1}}>
				<Swiper height={150}
					autoplay={true}
					autoplayTimeout={3}
					horizontal={true}
				
					dot={<View style={{ width: 8, height: 8, backgroundColor: 'white', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
					paginationStyle={{bottom: 5, left: null, right: 10,}}
					activeDot={<View style={{ width: 8, height: 8, backgroundColor: 'orange', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
					>
					{
	 					images.map((uri,i)=>{
							return (
								<TouchableNativeFeedback key={i}>
								<Image source={{ uri: uri.imgurl }} style={{ height: 150 }} />
								</TouchableNativeFeedback>
							)
						})
					}
					</Swiper>

		</View>)
	}
	
	renderImg(){
	 	var ImageViews=[];
		for(var i=0;i<sliderImgs.length;i++){
			ImageViews.push(
				<Image
					key={i}
					style={{flex:1}}
					source={{uri:sliderImgs[i]}}
				/>
			)
		}
		return ImageViews;
	 }

	_renderHeaderView(){
		let images = this.state.images;
		return (
		<View>
				<Swiper height={150}
					autoplay={true}
					autoplayTimeout={3}
					horizontal={true}
				
					dot={<View style={{ width: 8, height: 8, backgroundColor: 'white', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
					paginationStyle={{bottom: 5, left: null, right: 10,}}
					activeDot={<View style={{ width: 8, height: 8, backgroundColor: 'orange', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
					>
					{
	 					images.map((uri,i)=>{
							return (
								<TouchableNativeFeedback key={i}>
								<Image source={{ uri: uri.imgurl }} style={{ height: 150 }} />
								</TouchableNativeFeedback>
							)
						})
					}
					</Swiper>

		</View>)
	}
}

const styles = StyleSheet.create({

	listview: {
		flex: 1,
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
	textDate:{
		flex:1,
		fontSize:11,
		color:'#000',
		textAlign:'center',
	},
	img:{
		height:100,
		width:120,
	}

})