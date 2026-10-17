
import axios from 'axios';
import { useEffect, useState } from 'react';

function Hero() {
      const [data, setData] = useState(null);
      

    const key = "80db5b1c313d4400903180356261710";
    const getData = async ()=>{
        const response  = await axios.get('https://api.weatherapi.com/v1/current.json?key=80db5b1c313d4400903180356261710&q=India&aqi=no')
        
setData(response.data);        
    }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-[70%] w-1/2 bg-zinc-500 p-5">
      {data ? (
        <div>
          <h1>{data.location.name}</h1>
          <h2>{data.current.temp_c}°C</h2>
          <p>{data.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );

}

export default Hero