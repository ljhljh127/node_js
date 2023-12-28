const userModel = require('../models/userModel');
const requirementModel = require('../models/requirementsModel');
const bcrypt = require('bcrypt');

signup = async(reqUserData)=>{
    //test
    // console.log(reqUserData);
    //destructing을 통한 reqUserData 분해 후 서버측에서 안전하게 Date로 변환하기
    //패스워드 암호화하기

    const { UserID, Password, Gender, Birthday, PhoneNumber } = reqUserData;
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
        throw new Error('user id exist');
    }
    await userModel.createUser(userData);
    await requirementModel.createRequirements(userData.UserID);

};

login = async(loginData)=>{
    const {UserID,Password} = loginData;
    const existUser= await userModel.readUser(loginData);

    //id 없으면
    if(!existUser){
        throw new Error('user id not exist');
    }

    //id 있으면 비밀번호 검증
    const passwordVerify = await bcrypt.compare(Password,existUser.Password);
    //비밀번호 틀리면
    if(!passwordVerify){
        throw new Error('wrong password')
    }
    
    //로그인시 jwt 토큰 발급하기

     

};

module.exports = {
    signup,
    login,
}
