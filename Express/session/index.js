const express = require('express');
const app = express();

const users = [
    { id: 'binsan', name: 'binsan', password: '1234' },
    { id: 'kakao', name: 'kakao', password: '1234' }
];
const session = [];
let sessionCount = 0;
app.use(express.json());

app.post('/login', (req, res) => {
    const { id, password } = req.body;
    const user = users.find(u => {
        if (u.id === id && u.password === password) return true;
        return false;
    });
    if (user) {
        const userSession = {
            id,
            start: new Date(),
            sessionCount
        };
        res.send(sessionCount.toString());
        sessionCount++;
        session.push(userSession)
    } else {
        res.send('이이디나 비밀번호를 확인하세요')
    }
});

app.get('/my/:sc', (req, res) => {
    if (req.params.sc) {
        const userSession = session.find(el => el.sessionCount === parseInt(req.params.sc));
        if (userSession) {
            res.send("뭔가 개인정보")
        } else {
            res.send('다시 로그인 해주세요')
        }
    } else {
        res.send('로그인 해주세요')
   }
});

app.listen(3000, () => console.log('서버 가동중'));