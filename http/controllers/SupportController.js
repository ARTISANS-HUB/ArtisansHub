const {connectToDB ,closeDB }= require('../../config/mongodbconfig');
const logger = require('../../logger');
let db;
//node mailer
const mailHelper = require('../controllers/MailController');
var transporter = mailHelper.transporter;
var SERVER_NAME = process.env.SERVER_NAME;
var EMAIL_USERNAME = process.env.EMAIL_USERNAME;

const supports = async ( req , res , next ) => {


}

//add support
const AddSuport = async ( req , res , next )=>{
try{

db = await connectToDB();
const collection = db.collection('supports');

const { 
    supportID,
    message,
    created_at,
    usermail,
    created_by,

} = req.body.formData;

   const newSupport = {
    supportID:supportID,
    usermail : usermail,
    message:message,
    created_at : created_at,
    created_by : created_by,

   };

  

    //results
    const results = await collection.insertOne(newSupport);
    if (results) {
    res.status(200).json({message:"Support created successfully.. ",statusCode:200});
    

// Function to send an email
                            async function sendEmailWithRefreshedToken() {
                                try {
                                    //send token after verifying password
                                    const mailConfigurations = {
                                        // It should be a string of sender/server email
                                        from: EMAIL_USERNAME,
                                        to: usermail,
                                        // Subject of Email
                                        subject: 'System Support',
                                        // This would be the text of email body
                                        //  + user +
                      html: `<h1>Hi</h1><p>,${usermail},</p> 
                      Support Message :<b> ${message}</b> <br>
                      <p> Immediate attention needed</p>
                       <br> <h1>${SERVER_NAME} <h1>`
                                    };
                                    transporter.sendMail(mailConfigurations, function(error, info) {
                                       
                                        if (error) {
                                            logger.log('error','['+Date()+'no internet to send mail');
                                        }
                                        //console.log('Email Sent Successfully');
                                    });
                                } catch (error) {
                                    logger.log('error','['+Date()+'An error occurred when sending mail:', error);
                                }
                            }
                            // Initialize by sending an email
                            sendEmailWithRefreshedToken();
    }else{
    res.status(200).json({message:"Support not created successfully.. ",statusCode:200});
    }



}

catch(error){
 if (error) {
    logger.log('error',"can not create user account /  internal error", error);
    res.status(501).json({message : "Internal error... "});
    console.log(error)

    } 
}
}

module.exports = {

supports:supports,
AddSuport:AddSuport,


};