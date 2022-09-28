import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.darkpurple};
  text-shadow: 0 0px 1rem rgba(0, 0, 0, 0.2);
  diplay: flex;
  aling-items: end;
  text-align: end;
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.5rem;
    text-align: center;
  }
`;

export const TitleHilighted = styled.span`
  background-clip: text;
  line-height: 2.5625rem;
  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-align: end;
`;

export const ContainerLandingTitle = styled.div`
  display: flex;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    text-align: center;
    // border: 2px solid red;

    width: 80%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerLandingTitle2 = styled.div`
  margin-bottom: 5px;
  text-align: end;
  display: flex;

  span {
    font-size:1.5rem;
    font-weight:700;
    // border: 1px solid red;
    // text-align: end;
    color: ${(props) => props.theme.colors.darkpurple};

    @media(max-width: 1024px){
      font-size:1.3rem;
    }


    @media(max-width: 768px){
    text-align:center;
    // border: 1px solid red;
    font-size:1rem;
    
    }
  }
`;
