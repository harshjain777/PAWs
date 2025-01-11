const Adopt = require('../models/adopt.model.js')

const AdoptDog = async(req,res)=>{
    const {userName,email,phoneNo,address,petSelected,message} = req.body;

    try {

        const newAdopt = new Adopt({
            userName,
            email,
            phoneNo,
            address,
            petSelected,
            message
        })
        await newAdopt.save();

        res.status(200).json({
            success:true,
            message:"adoption request sent"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'error while sending request'
        })
        
    }
}

module.exports = {AdoptDog}
