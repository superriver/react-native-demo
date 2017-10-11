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


import Api from '.././service/dataService'

var List_Detail=require('.././page/home_detail');
 class ListViewBasics extends Component{
	constructor(props){
		super(props);
		const ds  = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state={
			refreshing:false,
			dataSource:ds
		};
		this._renderRow=this._renderRow.bind(this);
	}
	renderFooter(){
		return <ActivityIndicator/>;
	}

	pressRow(title){
	this.props.navigator.push({
		name:"列表详情",
		component:List_Detail,
		params:{
			title:title;
			}
		});
	}

	_renderRow(rowData){
		return(
				<TouchableNativeFeedback onPress={ () => this.pressRow.bind(this,rowData.name)}>
					<View style={styles.lvRow}>
						<Image style={styles.img} source={{uri:rowData.picSmall}}/>

						<View style={styles.textView}>
							<Text style={styles.textTitle} numberOfLines={1}>{rowData.name}</Text>
							<Text style={styles.textContent}>{rowData.description}</Text>
						</View>
					</View>
				</TouchableNativeFeedback>
			);
	}

	componentDidMount(){
		 Api.getList()
		.then((responseData)=>{
			this.setState({
				dataSource:this.state.dataSource.cloneWithRows(responseData.data)
			})
		})
		.done();
	}

	_onRefresh(){
 	this.setState({refreshing:true});
		setTimeout(()=>{
 		Api.getList()
		.then((responseData)=>{
			this.setState({
				refreshing:false,
				dataSource:this.state.dataSource.cloneWithRows(responseData.data)
			});
		}).done();
		},5000);

		
	}
	render(){
		 var progressBar =
		   <View>
		      <ProgressBarAndroid styleAttr="Inverse"/>
		    </View>; 
		return(
				<View>
					<ListView

						dataSource={this.state.dataSource}
						renderRow={this._renderRow}
						refreshControl={
							<RefreshControl
								onRefresh={()=>this._onRefresh}
								refreshing={this.state.refreshing}
								tintColor="#ff0000"
								title="Loading..."
								color={['#ff0000','#00ff00','#0000ff']}
								progressBackgroundColor="#ffff00"
							/>

						}

					renderFooter={this.renderFooter}
					 />
				</View>
			);
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

module.exports = ListViewBasics;