const { json } = require('express');
const express = require('express');
const Data = require("./router/data");
const PORT = process.env.PORT || 3001 
const app = express();

// app. get("/api",(req, res) => {
//     res.json({massage:`Hello from server!`});
// });

app.use("/api",Data)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});