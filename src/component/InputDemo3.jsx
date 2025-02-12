import React,{useState} from "react";

export const InputDemo3 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const nameHadler = (event)=>{
        setname(event.target.value)
    }
  return (
    <div>
        <h1>InputDemo3</h1>
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
        <div>
           <label> Batch</label>
           <input type="text" placeholder="enter batchname" onChange={(event)=>{setbatch(event.target.value)}}></input>
           {email}
        </div>
        <div>
           <label> Feedback</label>
           <input type="text" placeholder="enter your feedback" onChange={(event)=>{setfeedback(event.target.value)}}></input>
           {email}
        </div>
        <div>
           <label> Contact</label>
           <input type="text" placeholder="enter Query" onChange={(event)=>{setcontact(event.target.value)}}></input>
           {email}
        </div>
    </div>


  )
}
