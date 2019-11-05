const express = require('express');
const Joi = require('@hapi/joi');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.json());

const courses = [];

function getCourseById(id) {
    const courseId = parseInt(id);
    return courses.find(el => el.id === courseId);
}

function validate(input) {
    const schema = Joi.object({
        name: Joi.string().min(2).alphanum().required(),
        email: Joi.string().email().required(),
        birthDay: Joi.date().max('12-31-2000')
    });
    return schema.validate(input);
}

app.get('/api/users', (req, res) => {
    res.send(courses);
})

app.get('/api/users/:id', (req, res) => {
    const course = getCourseById(req.params.id);
    if (!course) {
        res.status(404).send('해당하는코스가 없습니다.')
    } else {
        res.send(`${course}`)
    }
})

app.post('/api/users', (req, res) => {
    const { value, error } = validate(req.body);
    if (error) {
        res.send(error.details[0].message);
        return;
    }
   
    const course = {
        id: courses.length + 1,
        name: value.name,
        email: value.email,
        birthDay: value.birthDay
    };

     console.log(course)
    courses.push(course);
    res.send(course);
})

app.delete('/api/users/:id', (req, res) => {
    const course = getCourseById(req.params.id);
    if (!course) {
        res.send('해당하는 데이터가 없습니다.')
    }
    else {
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        courses.length = index + 1;
        res.send(course);
    }
});


const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}.......`))