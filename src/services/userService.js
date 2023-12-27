const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

signup = async(userData)=>{
    //test
    // console.log(userData);
    //destructing을 통한 userData 분해 후 서버측에서 안전하게 Date로 변환하기
    //패스워드 암호화하기

    const { UserID, Password, Gender, Birthday, PhoneNumber } = userData;
    const dataBirthday = new Date(Birthday);
    const encryptedPW = bcrypt.hashSync(Password, 10); 
    const dbUserData = {
        UserID,
        Password: encryptedPW,
        Gender,
        Birthday: dataBirthday,
        PhoneNumber
    };
    //변환후 test
    // console.log(dateUserData);

    const existUser= await userModel.readUser(dbUserData);
    if(existUser){
        throw new Error('user id exist')
    }
    await userModel.createUser(dbUserData);

};


module.exports = {
    signup,
}
