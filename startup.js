var config = require('./config.json');
var swc = require('./controller/swc')(config);
async function main(){
	swc.mq.run(swc);

	swc.controller.msm_boom.send(swc);

}

main();