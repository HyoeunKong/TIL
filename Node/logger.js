const url = "https://naver.com";
console.log("이 코드는 한 번만 실행 됩니다.")
const log = msg => {
    //Something with url;
    console.log(`Logging Message : ${msg}`);
};

console.log("진짜로")
module.exports = log;
// module.exports.log = log;
//exports.log = log;

//module.exports = log;
//exports = log; // module.exports 에는 아무것도 할당되지 않았습니다.