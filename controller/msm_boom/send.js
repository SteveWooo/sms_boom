module.exports = async(swc)=>{
	var task = {
		type : "module",
		group : "msm_boom",
		func : "send",
		data : {
			phone : "18929889966"
		}
	}

	global.swc.mq.add(task);
}