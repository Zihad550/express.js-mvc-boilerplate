const { helloService } = require("../services/hello.service")

exports.hello = async(req, res) => {
    try{
        const msg = await helloService();
        res.status(200).json({
            status: 'Success',
            message: 'Successfully said hello',
            data: msg
        })
    }
    catch(error){
        res.status(400).json({
            status: 'Fail',
            message: 'Failed to say hello',
            data: error
        })
    }
}