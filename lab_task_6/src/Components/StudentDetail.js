import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";
const StudentDetail = () => {
    const {name} = useParams();
    const {id} = useParams();
    const {cgpa} = useParams();
    return(
        <div className="column">
            <div className="card">
                <p>Student_Name: {name}</p>
                <p>Student_ID: {id}</p>
                <p>Student_CGPA: {cgpa}</p>
            </div>

        </div>

    )
    
}

export default StudentDetail;