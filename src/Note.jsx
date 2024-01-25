import React, { useEffect, useState } from 'react'
import { IoIosSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { Add, Delete_data, VIEW_USER } from './action/action';


function Note() {

  const dispatch = useDispatch();
  const record = useSelector(state => state.crud.users);
  console.log(record);
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");

  const submit = () => {

    let id = Math.floor(Math.random() * 10000);
    let obj = { id, title, message };
    console.log(obj);
    dispatch(Add(obj));
    settitle("")
    setmessage("");
    console.log("done");
  }

  const deletedata=(id)=>{
    dispatch(Delete_data(id))
  }

  



  return (
    <div>
      <div className='shadow d-flex py-1 align-items-center justify-content-between'>
        <div className='d-flex align-items-center ps-3'>
          <img src='https://icons.iconarchive.com/icons/alecive/flatwoken/64/Apps-Google-Keep-icon.png' style={{ height: "50px" }} />
          <h3 className='text-white ps-2'>Keep CLONE</h3>
        </div>
        <div className='pe-3'>
          <IoIosSettings className='text-white fs-2 me-3' />
          <ImExit className='text-white fs-2' />
        </div>
      </div>

      <div>
        <form className='position-relative p-3 rounded shadow' style={{ width: "600px", margin: "32px auto 50px" }}>
          <input type="text" placeholder='Title' name='title' className='w-100 mb-3 fs-6' style={{ margin: "4px 10px", outline: "none", resize: "none" }} onChange={(e) => settitle(e.target.value)} value={title} />
          <p>
            <textarea name="content" placeholder='Take A Note...' className='w-100 fs-6' style={{ margin: "4px 10px", outline: "none", resize: "none" }} onChange={(e) => setmessage(e.target.value)} value={message}></textarea>
          </p>
          <button type='button' className='position-absolute d-flex justify-content-center align-items-center rounded-circle border-0 text-white shadow p-4 fs-6' style={{ right: "18px", bottom: "-18px", backgroundColor: "#FDC118", width: "36px", height: "36px" }} onClick={submit}>Add</button>
        </form>
      </div>

      <div className='d-flex m-3'>
      {
        record.map((val) => {
          return (
           
            <div className="card m-3 shadow" style={{ width: "18rem" }} >
              <div className="card-body">
                <h5 className="card-title text-black">{val.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{val.message}</h6>
                <button onClick={() => deletedata(val.id)}  className='border-0 bg-transparent position-relative' style={{float:"right"}}><MdDelete style={{color:"#FDC118"}} className='fs-4'/></button>
              </div>
            </div>
            
          )
        })
      }
       </div> 

    </div>
  )
}

export default Note
