module.exports = async (swc)=>{
	global.swc = {
		mq : {
			tasks : [],
			add : (task)=>{
				/*
				* type group func param
				*/
				global.swc.mq.tasks.push(task);
			}
		}
	}
}