const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const users = [];

app.get('/', (req, res) => {
    res.json(users)
})

app.post('/Register', (req, res) => {
    const user = { email: req.body.email, password: req.body.password }
    const exist = users.find(user => user.email === req.body.email)
    if (exist){
        return res.status(400).send('Email already exists. Please log in.')
    }
    users.push({
        id: Date.now().toString(),
        email: user.email,
        password: user.password
    })
    res.status(201).redirect(to='/Home')
})

app.post('/Login', (req, res) => {
    const user = { email: req.body.email, password: req.body.password }
    const exist = users.find(user => user.email === req.body.email)
    if (exist){
        return res.status(400).send('Email already exists. Please log in.')
    }
    users.push(user)
    res.status(201).send()
})


// boilerplate code for get request with error handling
// app.get('/', (req, res, next) => {
//     fs.readFile('/file-does-not-exist', (err, data) => {
//       if (err) {
//         next(err) // Pass errors to Express.
//       } else {
//         res.send(data)
//       }
//     })
//   })

app.use(function (err, req, res, next){
    res.status(500).send(err.message)
})

app.listen(4000, () => { console.log("listening on port 4000") });

