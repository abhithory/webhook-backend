const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post('/webhook/:storeid', function (req, res) {
    const _storeid = req.params.storeid.trim();

    console.log(_storeid);
    console.log(req.headers);
    console.log(req.body);


    return res.status(200).json({
        status: "success",
        data: {
            storeidparamas: _storeid,
            headersData: req.headers,
            bodyData:req.body
        }
    });
});


app.get('/testing', function (req, res) {
    return res.status(200).json({
        status: "success",
        data: "working fine"
    });
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});