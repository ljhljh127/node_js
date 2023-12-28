const  userService = require('../services/userService');

signup = async (req,res,next) => {
    try {
        await userService.signup(req.body);
        res.status(200).send({
            message: '회원가입이 완료되었습니다'
        });
    }
    catch(error){
        next(error); // 결국 에러핸들링 미들웨어로 넘기려고
    }
};

login = async (req,res,next) => {
    try {
        await userService.login(req.body);
        res.status(200).send({
            message: '로그인 성공'
        });
    }
    catch(error){
        next(error); // 결국 에러핸들링 미들웨어로 넘기려고
    }
};
module.exports = {
    signup,
    login,
}