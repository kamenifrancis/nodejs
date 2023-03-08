const  CronJob = require("Cron").CronJob
const mail = require("./email.sender") 
const job = new CronJob({
    cronTime: "* * * * * *",
    onTick: mail.sender
    
}


) 
job.start()
