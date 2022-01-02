const xlsx = require('xlsx');

const myFile = xlsx.readFile('Book1.xlsx');

var data = [];

const sheet = myFile.SheetNames;

for (let i = 0; i < sheet.length; i++) {
  const t = xlsx.utils.sheet_to_json(myFile.Sheets[myFile.SheetNames[i]]);
  t.forEach((x) => {
    data.push(x);
  });  
};


const express = require("express")
const app = express()
app.use(cors())
app.get("/data", function (req, res) {
    res.send(data);
  })

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

    /* console.log(data); */