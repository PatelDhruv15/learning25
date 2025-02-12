import React from "react";

export const Arraydemo1 = () => {
    
    var user = ["kirit","aditya","shyam","arjun"]

    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"blue"}}>Arraydemo1</h1>

            {
                user.map((user)=>{
                    return<li>{user}</li>
                })
            }

        </div>
    )
}