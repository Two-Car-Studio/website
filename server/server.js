const express = require('express');
const app = express();
const path = require('path');

const users = [{ name: 'John' }]

app.get('/', (req, res) => {
    res.json({
        "name": "yuki"
    })
})

app.get('/users', (req, res) => {
    res.json({'users': users})
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

