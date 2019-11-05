const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: "song" },
    { id: 2, name: "kong" },
    { id: 3, name: "fong" },
];

router.get('/', (req, res) => {
    res.send(users);
})

module.exports = router;
