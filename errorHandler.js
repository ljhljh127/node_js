const errorHandler = (err, req, res, _) => {
    if(err.message == 'user id exist'){
        res.status(409).send({
            message: '이미 존재하는 아이디입니다.'
        })
    }

    else if(err.message == 'user id not exist'){
        res.status(404).send({
            message: 'id가 존재하지 않습니다.'
        })
    }

    else if(err.message == 'wrong password'){
        res.status(404).send({
            message: '비밀번호가 일치하지 않습니다.'
        })
    }

    else{
        res.status(500).send({
        message: '서버에 알수없는 에러가 발생하였습니다 관리자에게 문의하세요'
    })
    }
};

module.exports = errorHandler;
