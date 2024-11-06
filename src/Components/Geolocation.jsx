import React from "react";
import { useState,useEffect } from "react";


const Geolocation = ()=>{

    const [lat,setLat] = useState(0)
    const [long,setLong] = useState(0)

    useEffect(()=>{
        geoLocation()

    },[])

    function geoLocation (){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)

            })
        }

    }


    return(
        <div>
            geo
        </div>
    )
}


export default Geolocation