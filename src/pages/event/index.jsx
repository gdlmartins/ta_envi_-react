import React, { useContext } from "react";

import { BsChevronRight, BsPencil } from "react-icons/bs";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import * as Styled from "./styles";

import cake from "../../assets/cake.png";
import { IoContainer } from "../create/styles";
const Event = (props) => {
  const { data, imageFromEvent } = useContext(GlobalStateContext);

  console.log(data, imageFromEvent);
  return (
    <Styled.ContainerMain>
      <Styled.ContainerText>
        <Styled.ContainerIcon>
          <Styled.Input>
            <Styled.Icons>
              <IoCalendarOutline
                style={{
                  width: "28px",
                  height: "28px",
                  color: `rgba(132,86,236,1)`,
                }}
              />
            </Styled.Icons>
            <span>{data?.eventName}</span>
            <span>{data?.starts}</span>
            {/* <span>{data?.ends}</span> */}
            <BsChevronRight
              style={{ width: "96px", height: "36px", borderRadius: "8px" }}
            />
          </Styled.Input>
        </Styled.ContainerIcon>

        <Styled.ContainerIcon>
          <Styled.Input>
            <Styled.Icons>
              <HiOutlineLocationMarker
                style={{
                  width: "28px",
                  height: "28px",
                  color: `rgba(132,86,236,1)`,
                }}
              />
            </Styled.Icons>
            <span>{data?.location}</span>
            <span>{data?.description}</span>
            <BsChevronRight
              style={{ width: "96px", height: "36px", borderRadius: "8px" }}
            />
          </Styled.Input>
        </Styled.ContainerIcon>
      </Styled.ContainerText>

      <Styled.ContainerImage>
        {imageFromEvent ? (
          <img style={{ width: 500, height: 500 }} src={imageFromEvent} />
        ) : (
          <img src={cake} />
        )}
      </Styled.ContainerImage>
    </Styled.ContainerMain>
  );
};

export default Event;
