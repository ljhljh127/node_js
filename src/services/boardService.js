const boardModel = require('../models/boardModel');

post = async(boardData)=>{
    await boardModel.createPost(boardData);

};

get = async(userID)=>{
    return await boardModel.readPost(userID);

};



module.exports = {
    post,
    get,
}