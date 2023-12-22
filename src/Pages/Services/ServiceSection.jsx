import React from 'react'
import '../../CSS/Services/ServiceSection.css'
import { FaUsers } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";




const ServiceSection = () => {
    const newObj =[
        {
            icon:<FaUsers />,
            heading:"Campus Placement",
            content:"MyInception Tech mold the student to meet the corporate expectation and place them in reputed companies. We deliver technical and soft skill training of exceptional quality through facilitators. Our Training Program was designed to aid the students to meet today’s Global....",
        },
        {
            icon:<MdComputer />,
            heading:"College Training",
            content:"To be successful in today’s fast growing world, it takes not only Training or business, but positive personal projection as well. For people to be very effective in any given situation, they need to have the appropriate personal skills along their knowledge and experience ..... ",
        },
        {
            icon:<FaRegUser />,
            heading:"Staffing Solutions",
            content:"Recruitment is the backbone of any organization. The employee contributes to the establishment of any organization. Quality policy and the assurance of constant up gradation in work and service can never be fulfilled without effective and hard working and honest employees.",
        },
        {
           
            icon:<FaBookOpen />,
            heading:"BPS",
            content:"In today’s trend of Globalization, every other industry, be it big or small businesses are bound to give quality service and product to sustain themselves in this competitive world of businesses to earn value on their operational assets .....",
        }  
    ]
  return (  

    <div className='container'>{
        newObj.map((item,index) =>(
        <div key= {index} className='contain' >
                <p className='icon'>{item.icon} </p>
                <h4 className='heading'>{item.heading}</h4>
                <p className='services_description'>{item.content}</p>
                <a href='' className='readmore'>Read More</a>
        </div>
            
       ))}
       
    </div>
  )
}

export default ServiceSection;