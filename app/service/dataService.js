import {APP_KEY,URL} from '.././common/constant'

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

	static getNewsList(type){
		return fetchService(URL+'/'+type+"?"+"key="+APP_KEY+"&num=10");
	}

	static getHealthList()
	{
		console.log("url->"+URL)
		return fetchService(URL+"/health?"+"key="+APP_KEY+"&num=10");
	}
}