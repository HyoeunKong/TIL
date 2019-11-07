const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/exercise-basic', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('db에 연결 되었습니다.'))
    .catch(error => console.error(error));

const schema = mongoose.Schema();
const Course = mongoose.model("courses", schema);

/* async function read() {
const courses = await Course.find()
        .sort('name')
        .select('name author')
        .where('tags').in(['backend']); 
    console.log(courses)

    
const courses1 = await Course.find({
    price: { $gte: 15 },
    name: { '$regex': 'js', '$options': 'i' }

});
console.log(courses1)


}
read();

async function read1() {
    const courses = await Course.find()
        .where('tags').in(['backend', 'frontend'])
        .sort('-price')
        .select('name price')
    console.log(courses)
}   

read1();

 */

Course.find({ isPublished: true })
    .where('tags')
    .in(['backend'])
    .select('name author')
    .then(result => console.log('실습', result))

async function 실습2() {
    const result = await Course.find({
        isPublished: true,
        tags: { $in: ['frontend', 'backend'] }
    })
        .sort('-price')
        .select('name price');
    console.log('실습2', result)
}

실습2();

Course.find().where('price').gt(15).where('name').regex(/js/i).then(res => console.log("실습3:",res));