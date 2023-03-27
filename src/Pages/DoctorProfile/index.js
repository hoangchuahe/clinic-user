import React from "react"
import {useParams} from "react-router-dom"
import { doctors } from "../../doctorData"
function DoctorDetail (){
    const {id} = useParams()
    let thisDoctor = doctors.find(prod => String(prod.id) === id)
    console.log(doctors.find(prod => prod.id === 1),id);
    return (
        <div style={{color:"black"}}>
            <h1>{thisDoctor?.name}</h1>
            <p>Price: ${thisDoctor.staff}</p>
            <p>{thisDoctor.address}</p>
        </div>
    )
}

export default DoctorDetail