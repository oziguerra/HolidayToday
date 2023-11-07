import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_KEY = "SCX2yP49XynsLxy0yhTr1SLNNm6gOhkp";
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let startingContent = "<h1>Home</h1><p>Welcome to HolidayToday!</p>"
let countries;


app.get("/", async (req, res) => {
  try {
    
    const result = await axios.get("https://calendarific.com/api/v2/countries?api_key=" + API_KEY);
    
    console.log(result.data.response.countries);
    countries = result.data.response.countries;
    res.render("index.ejs", { countries: countries });
  } catch (error) {
    console.log("Error");
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});