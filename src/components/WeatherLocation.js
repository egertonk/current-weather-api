import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export function WeatherLocation() {
    const [Data,setData] = useState(null);
    const [ipdata,setipdata] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const allData = [];
    var urlweather = '';
    var url = 'https://api.ipify.org?format=json';
    var req = new Request(url);

    // Note: the empty deps array [] means
    // this useEffect will run once 
    //Getting user ip
    useEffect(() => {
      fetch(url)
          .then(resp => resp.json())
          .then(resp => {
            console.log("-------------->3333n " + JSON.stringify(resp.ip));
            urlweather = "http://api.weatherapi.com/v1/current.json?key=6fed290694254461ac940949213010&q=" 
              + resp.ip + '&aqi=no';
            setipdata(resp)
            setIsLoaded(true);  
            
            fetch(urlweather)
            .then(resp => resp.json())
            .then(resp => {
              setData(resp)
            })
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          })
      }, []) 

      if(error)
      {
        return <>
                  <div className='media'> 
                  <img className="align-self-start mr-3"  style={{backgroundColor: '#02898a' }}/>
                  <div className="media-body"> 
                    Data NoT Available
                  </div>
                  </div>
                </>;
      }
      else{
          

        for (const property in Data) {
          if(property === "location")
          {
            allData.push(
              <>
              <div> 
                  <p className="location-name">{Data.location.region}, {Data.location.country}</p>
                  <div class="d-flex flex-row">
                    <div className="col">
                      <img src={Data.current.condition.icon} alt="Weather Picture" />
                    </div>
                  </div>

                  <div class="d-flex flex-row">
                    <div class="col temperature for_f">
                      {Data.current.temp_f} F
                    </div>
                    <div class="col temperature for_c">
                      {Data.current.temp_c} C
                    </div>
                  </div>

                  <div class="d-flex flex-row description-text">
                    <div className="col">
                      {Data.current.condition.text} 
                    </div>
                  </div>

                  <div class="d-flex flex-row updated-text">
                    <div className="col">
                      Updated as of {Data.location.localtime} 
                    </div>
                  </div>

                  <div class="d-flex flex-row humidity">
                    <div className="col">
                      Humidity {Data.current.humidity} 
                    </div>
                  </div>

                  <div class="d-flex flex-row ">
                    <div className="col">
                      Wind {Data.current.wind_mph} mph 
                    </div>
                  </div>

                  <div class="d-flex flex-row ">
                    <div className="col">
                      Visibility {Data.current.vis_miles} miles 
                    </div>
                  </div>

                  <div class="d-flex flex-row ">
                    <div className="col">
                      Feels Like {Data.current.feelslike_f} F - {Data.current.feelslike_c} C
                    </div>
                  </div>
              </div>
              </>
            );
          }        
      }
    }
        
    return (
        <div>
            {allData}
        </div>
    )
}

export default WeatherLocation
