const Hello = require('../models/hello.model');

exports.helloService = async() => {
    const result = await Hello.find({});
    return result;
}