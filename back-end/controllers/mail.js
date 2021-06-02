const controller = {
    sendMail: async (req, res) => {
        const mail = req.body;
        console.log(mail)
        
        // const promise = 
        // Promise.resolve(mail)
        // .then(() => {
        //     res.status(200).json(mail)
        //     // console.log()
        // })
        // .catch(err => {
        //     res.status(500).send(er);
        // })
    }
}