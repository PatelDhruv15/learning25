import React,{useState} from "react";

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const nameHadler = (event)=>{
        setname(event.target.value)
    }
  return (
    <div>
        <h1>InputDemo1</h1>
        <div>
          <label> Name</label>
          <input type="text" placeholder="enter name" onChange={(event)=>{nameHadler(event)}}></input>
          {name}
        </div>
        <div>
           <label> Email</label>
           <input type="text" placeholder="enter email" onChange={(event)=>{setemail(event.target.value)}}></input>
           {email}
        </div>
    </div>


  )
}
