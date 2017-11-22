import {APP_KEY,APP_KEY_ONLINE_NEWS,URL_HEALTH,URL_ONLINE_NEWS,
	APP_KEY_WEI_XIN_JINGXUAN,URL_WEI_XIN_JINGXUAN} from '.././common/constant'

const fetchService=(url,options={})=>{
	return fetch(url,options)
	.then(response=>{
		return response.json();
	})
	.then(json=>{
		return json;
	})
	.catch(error=>{
		console.warn(error);
	});
};


export default class Api{

	static getNewsList(key){
		return fetchService(URL_ONLINE_NEWS+'?key='+APP_KEY_ONLINE_NEWS+'&type='+key);
	}

	static getHealthList()
	{
		console.log("url->"+URL_HEALTH)
		return fetchService(URL_HEALTH+"/health?"+"key="+APP_KEY+"&num=10");
	}

	static getWeiXinList(start,pageLimit){
		return fetchService(URL_HEALTH+'/wxnew?'+'key='+APP_KEY+'&num='+pageLimit+'&page='+start);
	}
}