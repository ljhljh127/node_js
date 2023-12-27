const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

signup = async(reqestBody)=>{
    //test
    // console.log(reqestBody);
    //destructing을 통한 reqestBody 분해 후 서버측에서 안전하게 Date로 변환하기
    //패스워드 암호화하기

    const { UserID, Password, Gender, Birthday, PhoneNumber } = reqestBody;
    const dataBirthday = new Date(Birthday);
    const encryptedPW = bcrypt.hashSync(Password, 10); 
    const userData = {
        UserID,
        Password: encryptedPW,
        Gender,
        Birthday: dataBirthday,
        PhoneNumber
    };
    //변환후 test
    // console.log(userData);

    const existUser= await userModel.readUser(userData);
    if(existUser){
        throw new Error('user id exist')
    }
    await userModel.createUser(userData);

};

login = async(loginData)=>{

};

module.exports = {
    signup,
    login,
}
