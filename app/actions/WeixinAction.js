

import * as types from '../actions/ActionType'
import Api from '.././service/dataService'

export function fetchWeiXinList(start,pageLimit){

    return dispatch=>{
        dispatch({
            type: types.ACTION_WEIXIN_NEWS_PRE_FETCH,
            isLoadingMore: true,
        });

        Api.getWeiXinList(start,pageLimit)
		.then((result)=>{
            console.log("result-->"+result);
            if(result.code == 200){
                dispatch({
                    type: types.ACTION_WEIXIN_NEWS_FETCH_OK,
                    newsList:result.newslist,
                    start: start,
                    pageLimit: pageLimit,
                    isLoadingMore: false,
                })
            }else{
                dispatch({
                    type: types.ACTION_WEIXIN_NEWS_FETCH_ERROR,
                    isLoadingMore: false,
                })
            }
			
		},function(){
            dispatch({
                type: types.ACTION_WEIXIN_NEWS_FETCH_ERROR,
                isLoadingMore: false,
                
            })
        });
    };
}