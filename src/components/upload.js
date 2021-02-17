import React,{useState} from 'react';
import './upload.css';
import axios from 'axios'

const Upload = () =>{


    const [file,setfile] = useState();
    const [isValid,setisValid] = useState(false);


    const imageSelector = (e)=>{
        if(e.target.files && e.target.files.length >0 )
        {
              setfile(e.target.files[0]);
                setisValid(true);
                
            }else
            setisValid(false);
            
    }

    const fileUploader = (e)=>{

        e.preventDefault();
        axios.post('http://localhost:4000/upload',file)
      //axios.post('users/upload',file) 
      .then(Response=>console.log(Response))
        .catch(err => console.log(err));

    }



    return(
        <div className = "upload-main">
            <input type="file" onChange={imageSelector} accept = ".jpeg,.png,.jpg" />
            <button onClick={fileUploader}>Upload File</button>
        </div>

    );


}


export default Upload;