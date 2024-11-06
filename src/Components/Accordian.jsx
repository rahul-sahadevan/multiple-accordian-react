import React from "react";
import { useState } from "react";



const Accrodian = ()=>{


    const [allOpen,setAllOpen] = useState(false)
    const [data,setData] = useState(
    [
        { 
            id: 1, 
            paragraph: "In the realm of technology, advances are constantly shaping our daily lives in unexpected ways. From artificial intelligence to machine learning, these developments are redefining industries and changing the way we interact with the world around us. The future holds endless possibilities.", 
            openAccord: true 
        },
        { 
            id: 2, 
            paragraph: "Education has evolved dramatically with the introduction of online learning platforms and digital classrooms. Students now have the ability to access a wealth of resources from any location. This flexibility has empowered learners worldwide to acquire new skills at their own pace.", 
            openAccord: true 
        },
        { 
            id: 3, 
            paragraph: "Sustainability is becoming a priority in today's society as more individuals and companies seek ways to reduce their environmental impact. From renewable energy sources to sustainable practices, these efforts aim to create a healthier planet for future generations and encourage eco-friendly lifestyles.", 
            openAccord: true 
        },
        { 
            id: 4, 
            paragraph: "The healthcare industry is undergoing a transformation through the integration of technology. Telemedicine and wearable devices have made healthcare more accessible and personalized. These tools enable patients to monitor their health conditions and seek timely medical advice without leaving their homes.", 
            openAccord: true 
        },
        { 
            id: 5, 
            paragraph: "Travel has always been a way for people to explore different cultures and gain new perspectives. As technology advances, virtual reality experiences and digital tours are becoming popular. These innovations offer immersive travel experiences from the comfort of one's own home.", 
            openAccord: true 
        }
    ])
    
    
    

   
    function handleAccrodian(index){

        
        const newData = data.map((item, i) =>        
            i === index ? { ...item, openAccord: !item.openAccord } : item
    );
        
        setData(newData);
    } 
                
function handleAllOpen(){
        if(allOpen === true){
            setAllOpen(false)
        }
        else{
            setAllOpen(true)
        }


    }

    return (

        <div>
            <h2 className="heading">Accordian</h2>
            <div className="major-div">
                <button className="open-all" onClick = {handleAllOpen}>{!allOpen ? "open all":"close all"}</button>
                {
                    allOpen === true ? (
                        <div className="accordian-div">
                            {
                                data.map((val,index)=>(
                                    val.openAccord === true ? (
                                        <div className="accord">
                                                <span >
                                                    {val.paragraph}
                                                </span>
                                                <button className="open-btn" onClick={()=>handleAccrodian(index)}>{val.openAccord == true ?"close" : "open"}</button>
    
                                        </div>
    
                                    ):
                                    (
                                        <div className="close-div">
                                            <button className="open-btn" onClick={()=>handleAccrodian(index)}>{val.openAccord == true ?"close" : "open"}</button>
                                        </div>
                                    )

                                ))
                            }
                        </div>

                    ):(
                        <div className="accordian-div"></div>
                    )
                }

            </div>
        </div>
    )
}

export default Accrodian