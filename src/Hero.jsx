
import axios from 'axios';
import { useEffect, useState } from 'react';


function Hero() {
      
      const [Data, setData] = useState(null)

    const key = "80db5b1c313d4400903180356261710";
    const getData = async () =>{
      const respons = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=India&aqi=no`)
      setData(respons.data)
    }
    
    useEffect(() => {
        getData();
    }, [])
    
        
        
       
    
 

  return (
    <div className="h-[70%] w-1/2 bg-zinc-500 p-5">
      {Data ? (
        <div>
          <h1>Location - {Data.location.name}</h1>
          <h2>Temp - { Data.current.temp_c}°C</h2>
          <p>Sky - {Data.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );

}

export default Hero