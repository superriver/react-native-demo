const url = 'http://www.imooc.com/api/teacher?type=4&num=30';

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
	static getList(){
		return fetchService(url);
	}
}