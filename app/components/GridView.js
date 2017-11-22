'use strict';

import React from 'react';
import {
    View,
    StyleSheet,
    ListView
  } from 'react-native';

  const propTypes={
    items:React.PropTypes.array,
    reanderItem:React.PropTypes.func,
    style: React.PropTypes.func,
    itemsPerRow: React.PropTypes.number,
    onEndReached: React.PropTypes.func,
    renderFooter: React.PropTypes.func,
  };

  const GridView=({ 
    items,
    renderItem,
    style,
    itemsPerRow,
    onEndReached,
    renderFooter,
    scrollEnabled,
    pageSize})=>{
      const groupItems=(renderItems,renderItemsPerRow)=>{
        const itemGroup = [];
        let group = [];
        renderItems.forEach((item)=>{
          if(group.length === renderItemsPerRow){
              itemGroup.push(group);
              group = [item];
          }else{
              group.push(item);
          }
          
        });
        if(group.length>0){
          itemGroup.push(group);
        }
        return itemGroup;
      };

     const  renderGroup = (group)=>{
        let itemViews = group.map((item)=>{
            const it = renderItem(item);
            return it;
        })
        return(
          <View style={styles.group}>
            {itemViews}
            </View>
        )
    };

    const groups = groupItems(items,itemsPerRow);

    const ds =new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
      return (
          <ListView
                initialListSize={1}
                dataSource={ds.cloneWithRows(groups)}
                renderRow={renderGroup}
                scrollEnabled={scrollEnabled}
                pageSize={pageSize|1}
                enableEmptySections={true}
          />
      );
  };

  const styles=StyleSheet.create({
    group:{
      flexDirection:'row',
      alignItems:'center'
    }
  });

  GridView.propTypes=propTypes;

  GridView.defaultProps={
    items:[],
    renderItem:null,
    style:undefined,
    itemsPerRow:1,
    onEndReached:undefined,
    renderFooter:undefined,
  }
  export default GridView