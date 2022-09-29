import { useNavigate } from "react-router";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { gotoEvent, gotoHome } from "../../routes/coordinator";
import { Button, Container } from "../landing/styles";
import * as Styled from "./styles";


import useForm from '../../hooks/useForm';
import { IoCameraSharp , IoArrowBack } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";

import { storage } from "../../service/firebase";
import { v4 as uuidV4 } from "uuid";
import {
  ref,
  uploadBytes,
  listAll,
  list,
  getDownloadURL,
} from "@firebase/storage";

const Create = () => {
  const { setData, setimageFromEvent } =useContext(GlobalStateContext);

  const { form, onChange, clear } = useForm({
    eventName: "",
    starts: "",
    ends: "",
    location: "",
    description: "",
    url: "",
  });
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState(null);
  const imageListRef = ref(storage, "images");


  const onSubmit = (e)=>{
    e.preventDefault();
    gotoEvent(navigate);
    setData(form);
    setimageFromEvent(imageList);
  }

  useEffect(()=>{
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + uuidV4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => setImageList(url));
    });
  },[(e)=>setImageUpload(e.target.files[0])])

  return (
    <Container>
      <Styled.Header>
          <button onClick={() => gotoHome(navigate)}><IoArrowBack
                style={{
                  width: "28px",
                  height: "28px",
                  color: `rgba(132,86,236,1)`,
                }}
              /></button>
        <h1>Create a Event</h1>
        <div>
        <label htmlFor='pic'> 

        <Styled.IoContainer>
        <IoCameraSharp
         style={{
          width: "28px",
          height: "28px",
          color: `rgba(132,86,236,1)`,
        }}
        />
          </Styled.IoContainer> 
        </label>
         <input
          style={{display:"none"}}
          id='pic'
          type='file'
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        
      <Styled.Imagem src={imageList} />
      </div>
      </Styled.Header>
      <div>
        <Styled.Form onSubmit={onSubmit}>
          <Styled.ContainerInput>
            <label htmlFor='event'>🎉 Event name</label>
            <input
              name="eventName"
              value={form.eventName}
              onChange={onChange}
              required
            />
          </Styled.ContainerInput>

           <Styled.ContainerInput>
            <label htmlFor='starts'>🗓 It starts at</label>
            <input
              name="starts"
              // value={form.starts}
              onChange={onChange}
              id='starts'
              type='datetime-local'
              required
            />
          </Styled.ContainerInput>
          <Styled.ContainerInput>
            <label htmlFor='ends'>🏁 It ends at</label>
            <input
              id='ends'
              name="ends"
              // value={form.ends}
              onChange={onChange}
              type='datetime-local'
            />
          </Styled.ContainerInput> 

          <Styled.ContainerInput>
            <label htmlFor='location'>📍 It’s happening at</label>
            <input
               name="location"
               value={form.location}
               onChange={onChange}
              required
            />
          </Styled.ContainerInput>
          <Styled.ContainerInput>
            <label htmlFor='url'>🔗 Add a URL link</label>
            <input
              name="url"
              onChange={onChange}
              value={form.url}
            />
          </Styled.ContainerInput>
          <Styled.ContainerInput>
            <label htmlFor='description'>✏️Description</label>
            <input
              name="description"
              onChange={onChange}
              value={form.description}
            />
          </Styled.ContainerInput>

          <div>
            <Button type='submit'>Create Event</Button>
          </div>

        </Styled.Form>
      </div>

    </Container>
  );
};
export default Create;
