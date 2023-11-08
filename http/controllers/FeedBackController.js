
const {connectToDB ,closeDB }= require('../../config/mongodbconfig');
const logger = require('../../logger');
let db;

const feedbacks= async (req, res, next)=>{


try{
//query
db = await connectToDB();

const collection = db.collection('feedbacks');

 const feebacksData = await collection.find({}).toArray();
 res.json(feebacksData);
}
catch(error){
	res.status(501).json({ statusCode : 501 });
	logger.log('error','['+Date()+']can not fetch all feebacks...'+ error);
}
}



module.exports = {

feedbacks:feedbacks
};