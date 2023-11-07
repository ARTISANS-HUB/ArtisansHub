const {connectToDB ,closeDB }= require('../../config/mongodbconfig');
const logger = require('../../logger');
let db;

const Services = async ( req ,res , next )=>{

    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find().toArray();
         res.json(services);
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }

}




const ServicesCompleted = async ( req ,res , next )=>{


    const artisanId = req.params.artisanId;

    console.log(artisanId);

     
    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find({artisanId:artisanId}).toArray();
         res.json({total : services.length});
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }

}

const ServicesCancelled = async ( req ,res , next )=>{

    const artisanId = req.params.artisanId;

    console.log(artisanId);

     
    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find({artisanId:artisanId}).toArray();
         res.json({total : services.length});
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }
}


const ServicesPending = async ( req ,res , next )=>{
    const artisanId = req.params.artisanId;

    console.log(artisanId);

     
    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find({artisanId:artisanId}).toArray();
         res.json({total : services.length});
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }

}




//buyer
const ServicesCompletedBuyer = async ( req ,res , next )=>{


    const artisanId = req.params.artisanId;

    console.log(artisanId);

     
    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find({artisanId:artisanId}).toArray();
         res.json({total : services.length});
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }

}

const ServicesCancelledBuyer = async ( req ,res , next )=>{

    const artisanId = req.params.artisanId;

    console.log(artisanId);

     
    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find({artisanId:artisanId}).toArray();
         res.json({total : services.length});
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }
}


const ServicesPendingBuyer = async ( req ,res , next )=>{
    const artisanId = req.params.artisanId;

    console.log(artisanId);

     
    try{
        //query
        db = await connectToDB();
        
        const collection = db.collection('services');
        
         const services = await collection.find({artisanId:artisanId}).toArray();
         res.json({total : services.length});
        
        }
        catch(error){
             res.status(501).json({ statusCode : 501 });
            logger.log('error','['+Date()+']can not fetch all services for platform...'+ error);
        }

}


module.exports = {
    Services:Services,
    ServicesCompleted:ServicesCompleted,
    ServicesCancelled:ServicesCancelled,
    ServicesPending:ServicesPending,


    ServicesCancelledBuyer:ServicesCancelledBuyer,
    ServicesPendingBuyer:ServicesPendingBuyer,
    ServicesCompletedBuyer:ServicesCompletedBuyer,




};