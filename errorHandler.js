const errorHandler = (err, req, res, _) => {
    if(err.message == 'user id exist'){
        res.status(409).send({
            message: '이미 존재하는 아이디입니다.'
        })
    }
};

module.exports = errorHandler;
