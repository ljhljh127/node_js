const boardService = require('../services/boardService');

post = async (req,res,next) => {
    try {
        await boardService.post(req.body);
        res.status(200).send({
            message: '게시물 작성 완료'
        });
    }
    catch(error){
        next(error); // 결국 에러핸들링 미들웨어로 넘기려고
    }
};

get = async (req,res,next) => {
    try {
        const boards = await boardService.get(req.body);
        console.log(boards);
        res.status(200).send({
            message: '작성된 게시물',
            data: boards

        });
    }
    catch(error){
        next(error); // 결국 에러핸들링 미들웨어로 넘기려고
    }
};


module.exports = {
    post,
    get
}