module.exports = (config)=>{
	let swc = {
		controller : {
			msm_boom : {
				send : require("./msm_boom/send")
			}
		},
		module : {
			msm_boom : {
				send : require('../modules/msm_boom/send'),
				// hiracer : require("../modules/msm_boom/hiracer")
			}
		},
		config : config,
		mq : {
			init : require('./mq/init'),
			run : require('./mq/run')
		}
	}

	swc.mq.init();

	return swc;
}