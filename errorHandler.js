const errorHandler = (err, req, res, _) => {
    if(err.message == 'user id exist'){
        res.status(409).send({
            message: '이미 존재하는 아이디입니다.'
        })
    }

    if(err.message == 'user id not exist'){
        res.status(404).send({
            message: 'id가 존재하지 않습니다.'
        })
    }

    if(err.message == 'wrong password'){
        res.status(404).send({
            message: '비밀번호가 일치하지 않습니다.'
        })
    }
};

module.exports = errorHandler;
