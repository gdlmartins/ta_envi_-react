import { useNavigate } from "react-router";
import { gotoHome } from "../../routes/coordinator";
import { Button, Container } from "../landing/styles";
import * as Styled from "./styles";

import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";

import { storage } from "../../service/firebase";
import { v4 as uuidV4 } from "uuid";
import { ref,uploadBytes, listAll, list, getDownloadURL } from "@firebase/storage";
import { useEffect } from "react";

const Create = () => {
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState(null);

  const imageListRef = ref(storage , "images");

//   useEffect(()=>{
//       listAll(imageListRef).then((resp)=>{
//           resp.
//       })
//   },[])

  const uploadImage =()=>
   {

      if (imageUpload === null )return;

      const imageRef = ref(storage, `images/${imageUpload.name + uuidV4() }`);
   
      uploadBytes(imageRef , imageUpload).then((snaphsot)=>
      {
          getDownloadURL(snaphsot.ref).then((url)=> setImageList(url))
        
      })
   }
         
      
  


  return (
    <Container>
      <Styled.Header>
        <input
          type='file'
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <button
        onClick={uploadImage}
        >UploadImage</button>
        <h1>Create page</h1>
        <Styled.IoContainer>
          <IoSettingsSharp
            style={{
              width: "28px",
              height: "28px",
              color: `rgba(132,86,236,1)`,
            }}
          />
        </Styled.IoContainer>
      </Styled.Header>

      <button onClick={() => gotoHome(navigate)}>Cancel</button>
      <div>
        <form>
          <Styled.Form>
            <label htmlFor='event'>🎉 Event name</label>
            <input
              id='party'
              type='datetime-local'
              name='event'
              min='2017-06-01T08:30'
              max='2017-06-30T16:30'
              required
            />
            <span className='validity'></span>
            <input
              id='party'
              type='datetime-local'
              name='event'
              min='2017-06-01T08:30'
              max='2017-06-30T16:30'
              required
            />
            <span className='validity'></span>
            <input
              id='party'
              type='datetime-local'
              name='event'
              min='2017-06-01T08:30'
              max='2017-06-30T16:30'
              required
            />
            <span className='validity'></span>
            <input
              id='party'
              type='datetime-local'
              name='event'
              min='2017-06-01T08:30'
              max='2017-06-30T16:30'
              required
            />
            <span className='validity'></span>
          </Styled.Form>
          <div>
            <Button type='submit'>Create</Button>
          </div>
        </form>
      </div>
      <img src={imageList}/>
    </Container>
  );
};
export default Create;
