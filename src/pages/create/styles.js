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
 border: 5px solid red;
 justify-content: space-around;
 align-items: center;
`

export const Form = styled.form`
margin: 10px auto;

width:90%;
// border:1px solid red;
display: flex;
flex-direction: column;
// justify-items: center;
align-items: center;

button{

}


`

export const ContainerInput = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: start;
margin:10px auto;
// border:1px solid green;
width: 90%;
max-width:480px;

 input{
     max-width:500px;
     border-radius: 8px;
     font-size:1rem;
     width: 100%;
     padding:10px;
     background: ${(props)=>(props.theme.neutrals.txtbg5)};
     
    &:focus{
        outline: none;
        background:${(props)=>(props.theme.secondaryPurples.secPurple1)}
    }

 }
`

export const Imagem = styled.img`
margin: 20px auto;
width:100px;
height:100px;

`