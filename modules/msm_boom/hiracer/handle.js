const request = require("request");

function req(swc, data, type){
	return new Promise((resolve, reject)=>{
		var option = {
			url : "http://hiracer.com/rest/api/hiracer/member/captcha.jhtml",
			headers : {
				'Content-Type' : "application/json",
				'Referer' : "http://hiracer.com/html/pages/register.html",

			},
			method : "POST",
			body : JSON.stringify({
				mobile : "+86 " + data.phone,
				type : type
			})
		}
		request.post(option, (err, res, body)=>{
			try {
				body = JSON.parse(body);
				//重发
				if(type == 0){
					if(body.retCode == "0000"){
						resolve({
							code : 2000
						});
						return ;
					}else {
						resolve({
							code : 4000,
							type : type,
							message : body.retMessage
						});
						return 
					}
				} else { //尚未注册的
					if(body.retCode == "0000"){
						resolve({
							code : 2000
						});
						return ;
					}else {
						resolve({
							code : 4000,
							type : type,
							message : body.retMessage
						});
						return 
					}
				}
			}catch(e){
				resolve({
					code : -1,
					message : e
				})
			}
		})
	})
}

module.exports = async(swc, task)=>{
	let data = task.data;

	try{
		let result_1 = await req(swc, data, 1);
		//普通用户
		if(result_1.code == 2000){
			return {
				code : 2000
			}
		}
		let result_0 = await req(swc, data, 0);
		//注册用户
		if(result_0.code != 2000){
			return result_0;
		}

		return {
			code : 2000
		}
	}catch(e){
		return {
			code : 5000,
			message : e.message
		}
	}
}