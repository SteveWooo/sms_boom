async function run(swc){
	try{
		let task = global.swc.mq.tasks.shift();
		console.log(global.swc.mq.tasks.length)
		if(task){
			let res = await swc[task.type][task.group][task.func](swc, task);
		}

		setTimeout(async()=>{
			run(swc);
		}, swc.config.mq.span)
	}catch(e){
		console.log(e);
		setTimeout(async()=>{
			run(swc);
		}, swc.config.mq.span)
	}
}

module.exports = async (swc)=>{
	run(swc);
}