const { connectToDB, closeDB } = require('../../config/mongodbconfig');
const logger = require('../../logger');
let db;

const Services = async (req, res, next) => {

    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find().toArray();
        res.json(services);

    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }

}


// ServicesCategory
const ServicesCategory = async (req, res, next) => {

    try {
        //query
        // db = await connectToDB();

        // const collection = db.collection('services');

        // const services = await collection.find().toArray();
       
        // res.json(services);

        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find().toArray();

        const types = services.map(service => service.type);

        res.json(types);


    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + '] can not fetch all services for platform...' + error);
    }

}

// const ServicesCat= async (req, res, next) => {
//     try {
//         db = await connectToDB();

//         const collection = db.collection('services');

//         const services = await collection.find({type}).toArray();
//     } catch (error) {
        
//     }
// }




const ServicesCompleted = async (req, res, next) => {

    const artisanId = req.params.artisanId;

    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find({ artisanId: artisanId, completed: 1 }).toArray();
        res.json(services);
    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }

}

const ServicesCancelled = async (req, res, next) => {

    const artisanId = req.params.artisanId;

    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find({ artisanId: artisanId, completed: 2 }).toArray();
        res.json(services);

    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }
}


const ServicesPending = async (req, res, next) => {
    const artisanId = req.params.artisanId;


    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find({ artisanId: artisanId, completed: 0 }).toArray();
        res.json(services);


    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }

}




//buyer
const ServicesCompletedBuyer = async (req, res, next) => {


    const buyerId = req.params.buyerId;

    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find({ buyerId: buyerId, completed: 1 }).toArray();
        res.json(services);

    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }

}

const ServicesCancelledBuyer = async (req, res, next) => {

    const buyerId = req.params.buyerId;


    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find({ buyerId: buyerId, completed: 2 }).toArray();
        res.json(services);

    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }
}


const ServicesPendingBuyer = async (req, res, next) => {
    const buyerId = req.params.buyerId;


    try {
        //query
        db = await connectToDB();

        const collection = db.collection('services');

        const services = await collection.find({ buyerId: buyerId, completed: 0 }).toArray();
        res.json(services);

    }
    catch (error) {
        res.status(501).json({ statusCode: 501 });
        logger.log('error', '[' + Date() + ']can not fetch all services for platform...' + error);
    }

}


module.exports = {
    Services: Services,
    ServicesCategory:ServicesCategory,
    ServicesCompleted: ServicesCompleted,
    ServicesCancelled: ServicesCancelled,
    ServicesPending: ServicesPending,


    ServicesCancelledBuyer: ServicesCancelledBuyer,
    ServicesPendingBuyer: ServicesPendingBuyer,
    ServicesCompletedBuyer: ServicesCompletedBuyer,




};
