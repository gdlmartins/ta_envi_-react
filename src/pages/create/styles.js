import styled from "styled-components";




export const IoContainer = styled.div`
width: 48px;
height: 48px;
background: ${(props) => props.theme.colors.lightpurple};
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
`

export const Header = styled.div`
 display: flex;
`

export const Form = styled.div`
margin: 10px auto;

width:90%;
border:1px solid red;
display: flex;
flex-direction: column;
// justify-items: center;
align-items: center;

input {
    width: 90%;
    max-width:500px;

}
`