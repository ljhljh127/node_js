//require() 외부 모듈을 가져옴 여기선 express,dotenv 모듈을 가져옴
const express = require('express');
require('dotenv').config();
//express framework의 CreateApplication() 함수를 시작하는 명령어 이 때 Application 객체가 리턴됨
const app = express();

// express.static() 특정 폴더를 정적 폴더로 지정(참고사항)
// 이를 통하여 기능 없는 정적 파일 html,css 등을 public 으로 넣고 js 소스를 숨길 수 있음
// app.use(express.static('public'));

//json 파싱
 app.use(express.json());

//포트설정 환경변수에서 가져오거나 3000번 을 defualt로
app.set('port',process.env.PORT || 3000);
const port = app.get('port');

//라우터 등록
const userRouter = require('./routes/userRoutes');
const errorHandler = require('../errorHandler');

app.use('/users',userRouter);
app.use(errorHandler)

app.listen(port, function(){console.log("API 서버가 ",port,"번 포트에서 정상적으로 실행 중입니다.")});