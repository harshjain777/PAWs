const Contact = require('../models/contact.model.js')

const contactUser = async(req,res)=>{
    const {userName,email,description} = req.body;

    try {

        const newContact = new Contact({
            userName,
            email,
            description
        })
        await newContact.save();

        res.status(200).json({
            success:true,
            message:"message sent successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'error while sending message'
        })
        
    }
}

module.exports = {contactUser}
