import { useNavigate } from "react-router";
import { gotoCreate } from "../../routes/coordinator";
import { LandingTitle } from "./landingTitle";

import * as Styled from "./styles";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.MainContainer>
        <Styled.ImageLanding />

        <Styled.TitleContainer>
          <LandingTitle />
         
        </Styled.TitleContainer>

        <Styled.ButtonContainer> 
        <Styled.Button onClick={() => gotoCreate(navigate)}>
            🎉 Create my event
          </Styled.Button>
        </Styled.ButtonContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default Landing;
