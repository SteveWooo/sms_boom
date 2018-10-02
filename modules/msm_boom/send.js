const hiracer = require("./hiracer/handle");

module.exports = async(swc, task)=>{
	// let data = task.data;
	// console.log(data);
	let res = await hiracer(swc, task);
	return res;
}