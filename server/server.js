const express = require('express');
const app = express();
const path = require('path');

var cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send({
        "name": "yuki"
    })
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

