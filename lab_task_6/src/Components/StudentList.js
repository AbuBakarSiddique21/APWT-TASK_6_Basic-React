import React, { Component } from "react";

import Student from './Student';

function StudentList(){
    return(
        <div>
            <Student name="ABU" id="18-38381-2" cgpa="4.00"/>
            <Student name="SIDDIQUE" id="17-36892-3" cgpa="2.75"/>
            <Student name="Rakib" id="19-43322-2" cgpa="3.89"/>
        </div>

    )
}

export default StudentList;