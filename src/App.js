import SearchIcon from '@mui/icons-material/SearchOutlined';
import { Button, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./component/weather";
const getTemp = () => {
  var h = new Date().getHours();
  if (16 > h && h > 5) return new Date().getHours() + Math.floor(Math.random() * 10) + 25;
  else return new Date().getHours() + Math.floor(Math.random() * 7) + 18;
}
function App() {
  const [data, setData] = useState("");
  const [post, setPost] = useState("");
  const [pvalue, setPValue] = useState("");
  const [temp, setTemp] = useState(0);
  const [crain, setCrain] = useState(0);
  useEffect(() => {
    if (post && (post.length) > 3) axios.get("https://api.postalpincode.in/postoffice/" + post).then((res) => { setData(res.data); console.log(res.data[0].Status) });
    setTemp(getTemp()); setCrain(() => new Date().getMonth() + Math.floor(Math.random() * 50) + 10);
  }, [post])
  return (
    <center>
      <br></br>
    <div className='weather' style={{opacity:0.9,backgroundColor:"#fff",
    height:"50vh",
    width:"50%",
    padding:"0%",
    marginLeft:"auto",marginRight:"auto"}}><br></br>
      <TextField
      label="Type your postal name"
      onChange={e => setPValue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <Button onClick={() => setPost(pvalue)}>
              <SearchIcon />
            </Button>
          </InputAdornment>)
      }}
    ></TextField><br></br>
      {data ? (data[0].Status === 'Success' ? (data[0].Message.replace("Number of Post office(s) found:", '') === '1' ? <Weather name={data[0].PostOffice[0].Name} temperature={temp} rain={crain} /> : data[0].Message.replace("Number of Post office(s) found:", '')) : "no such name") : ""}
      </div>
    </center>
  );
}

export default App;
