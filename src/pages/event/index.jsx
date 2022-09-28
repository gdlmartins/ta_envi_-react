import { BsChevronRight, BsPencil } from "react-icons/bs";
// import { GlobalStateContext } from "../../global/GlobalStateContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import * as Styled from "./styles";

import cake from "../../assets/cake.png";
import { IoContainer } from "../create/styles";
const Event = (props) => {
//   const { data } = useContext(GlobalStateContext);

//   console.log(data);
  return (
    <Styled.ContainerMain>
      <Styled.ContainerText>
        {/* <BsChevronRight 
       style={{ width: "96px" ,
       height:"36px",
       borderRadius: "8px"}}/>
    */}

        <Styled.ContainerIcon>
          <span>{props.when}</span>
          <span>{props.when}</span>

          <Styled.Icons>
            <IoCalendarOutline
              style={{
                width: "28px",
                height: "28px",
                color: `rgba(132,86,236,1)`,
              }}
            />
          </Styled.Icons>
        </Styled.ContainerIcon>

        <Styled.ContainerIcon>
          <span>{props.where}</span>
          <span>{props.where}</span>
          <Styled.Icons>
            <HiOutlineLocationMarker
              style={{
                width: "28px",
                height: "28px",
                color: `rgba(132,86,236,1)`,
              }}
            />
          </Styled.Icons>
        </Styled.ContainerIcon>
      </Styled.ContainerText>

      <Styled.ContainerImage>
        <img src={cake} />
      </Styled.ContainerImage>
    </Styled.ContainerMain>
  );
};

export default Event;
