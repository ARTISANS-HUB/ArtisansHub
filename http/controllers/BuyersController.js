
const {connectToDB ,closeDB }= require('../../config/mongodbconfig');
const logger = require('../../logger');
let db;

const buyers  = async ( req, res, next ) =>{

try{
//query
db = await connectToDB();

const collection = db.collection('buyers');
 const buyersData = await collection.find().toArray();
 res.json(buyersData);


}
catch(error){
	 res.status(501).json({ statusCode : 501 });
	logger.log('error','['+Date()+']can not fetch all buyers...'+ error);
}

}
module.exports = {
buyers:buyers
};