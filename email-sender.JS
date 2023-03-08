const nodemailer = require("nodemailer") 

module.exports.send = async function() {
    const transporter = nodemailer.createTransport( { 
    service: "gmail", 
    auth: { 
        user: " blickson57@gmail.com",
        pass:  "iiiiiiiii#",
}
}) 
const mailoption = {
    from:"blickson57@gmail.com",
    to: "poses35687@fenwazi.com",
    subject: "checkpoint de nodejs",
    text:"francis work from gomycode"
}
await transporter.sendMail(mailoption,function (err) {
    if (err){
        console.log(err)
    } 
    else{
        console.log("email sent:" + info.reponse) 
    }
})
 }
