import styled from "styled-components";

export const ContainerMain = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
width: 100vw;
height: 100vh;
border: 10px solid blue;
`;

export const ContainerText = styled.div`
  grid-column: 1/2;
  border: 2px solid green;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
 
  justify-self: center;
  align-self: center;

  border: 2px solid red;

  img {
    width: 500px;
    height: 500px;
   
  }

//   @media (max-width: 960px) {
//     gap: 1px;
//     height: 97vh;
//     margin: 1px auto;
//     grid-template-columns: 1fr;
//     grid-template-rows: auto auto;
//   }

//   @media (max-width: 768px) {
//     margin: 10px auto;
//     grid-template-columns: 1fr;
//     grid-template-rows: auto auto;
//   }
`;


export const Icons = styled.div`
width: 48px;
height: 48px;
background: ${(props) => props.theme.colors.lightpurple};
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
`

export const ContainerIcon = styled.div`
margin:10px;

`