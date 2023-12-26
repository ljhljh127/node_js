const  userService = require('../services/userService')

exports.signup = async (req,res) => {
    try {
        const newUser = await userService.signup(req.body);
        res.status(200).json(newUser);
    }
    catch(error){
        next(error); // 결국 에러핸들링 미들웨어로 넘기려고
    }
};