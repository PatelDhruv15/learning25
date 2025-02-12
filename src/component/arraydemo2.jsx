import React from "react";

export const arraydemo2 = () => {
     
    var students = [
        {
            name:"nikuj",
            age:21,
            marks:67
        },
        {
            name:"aditi",
            age:21,
            marks:67
        },
        {
            name:"nil",
            age:16,
            marks:89
        }

    ]

return (
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"red"}}>array demo2</h1>
            {
                students.map((stu)=>{
                    return <div>
                        <h1>Name = {stu.name}</h1>
                        <h2>Age = {stu.age}</h2>
                        <h3>Marks = {stu.marks}</h3>
                     </div>
                })
            }
        </div>
    );
};

