let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let user_router = require('./routers/main_router.js')

app.get("/", (req, res) => {
    res.send("This is main page.");
});

app.get("/home", (req, res) => {
    res.send("This is home page.");
});

app.use("/about", (req, res) => {
    res.end("This is about page.");
});

app.use("/photo/family", (req, res) => {
    res.send("This is photo family page.");
});

app.use("/user", user_router)


app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});