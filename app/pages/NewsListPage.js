import React,{Component} from 'react';
import {	
	ListView,
	Image,
	RefreshControl,
	ActivityIndicator,
	ProgressBarAndroid,
	TouchableOpacity,
	Alert,
	Navigator,
	TouchableNativeFeedback,
Dimensions,AsyncStorage,Platform,StyleSheet,View,Text,TouchableHighlight} from 'react-native'

import Api from '.././service/dataService'

export default class NewsListPage extends Component{
	static propTypes = {
		categoryKey: React.PropTypes.string.isRequired,
	  };

	constructor(props){
		super(props);
		const ds  = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state={
			refreshing:false,
			dataSource:ds
		};
		this._renderRow=this._renderRow.bind(this);
		console.log("constructor");
		
	}
	renderFooter(){
		return <ActivityIndicator/>;
	}

	pressRow(rowData){
		const { navigate } = this.props.navigation;
	    navigate('List_Detail', { rowData });
	}

	_renderRow(rowData){
		return(
			<TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={this.props.itemClicked}>
		<View style={styles.itemContainer}>
          <Image style={styles.itemIcon} 
            source={{uri: (rowData.thumbnail_pic_s=='' ? 'defaults' : rowData.thumbnail_pic_s)}}/>
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle} 
              numberOfLines={4}>
              {rowData.title}
            </Text>
            <Text style={styles.fromText} 
              numberOfLines={1}>
              {rowData.author_name}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
			);
	}

	componentDidMount(){
		console.log("componentDidMount");
		 Api.getNewsList(this.props.categoryKey)
		.then((responseData)=>{
			console.log("getNewsList");
			this.setState({
				dataSource:this.state.dataSource.cloneWithRows(Array.from(responseData.result.data))
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
				dataSource:this.state.dataSource.cloneWithRows(responseData.newslist)
			});
		}).done();
		},5000);

		
	}
	
	render(){
		console.log("render"+this.state.dataSource);
		 var progressBar =
		   <View>
		      <ProgressBarAndroid styleAttr="Inverse"/>
			</View>; 
			
			const {params} = this.props;

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
const styles = StyleSheet.create({
	itemContainer: {
	  backgroundColor: 'white',
	  marginVertical: 4,
	  borderColor: '#dddddd',
	  borderStyle: null,
	  borderWidth: 0.5,
	  borderRadius: 2,
	  height: 113,
	  flexDirection: 'row'
	},
  
	itemIcon: {
	  width: 163,
	  height: 113,
	  backgroundColor: '#e9e9e9',
	},
  
	itemDescription: {
	  flex: 1,
	  marginLeft: 8,
	  marginTop: 12,
	  marginRight: 8,
	  marginBottom: 8,
	},
  
	itemTitle: {
	  flex: 5,
	  color: '#535252',
	  fontSize: 14,
	},
  
	fromText: {
	  flex: 1,
	  fontSize: 9,
	  color: '#ff9800',
	  alignSelf: 'flex-end',
	},
  });
  