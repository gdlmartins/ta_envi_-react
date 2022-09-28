import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    font-family: 'Manrope', 'sans-serif';
}
`;

export const theme = { 

    colors: { 
       primaryText: "#240D57",
       secondaryText: "#4F4F4F",
       primary: "#fff", 
       secondary: "#000", 
       darkpurple:"#240D57",
       backgroundLandingPage: "linear-gradient(0deg,#E9DFFF -43.12%,#FFFFFF 121.3%)",
       button:"linear-gradient(90deg,#501FC1,#C245D3,#F0567A)",
       lightpurple: "rgba(132,86,236,.1)",
       mediumpurple: "rgba(132,86,236,.6)",
       
    },
    shadow: {
     boxShadow:"0 1px 1rem 1px #CCC}"
    }


 

    
}