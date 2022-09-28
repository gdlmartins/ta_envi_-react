import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  height:100vh;
  background: ${(props) => props.theme.colors.backgroundLandingPage};
`;

export const MainContainer = styled.div`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 100px auto;
  height: 78vh;
  width: 80%;

  @media (max-width: 768px) {
    gap: 1px;
    height: 97vh;
    margin: 10px auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export const ImageLanding = styled.div`
  background: url(/assets/landingImage.svg);
  height: 735px;
  width: 375px;
  align-self: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: ${(props) => props.theme.shadow.boxShadow};
  border-radius: 1rem;


  @media (max-width: 1024px) {
    height: 626px;
    width: 320px;
  }

  @media (max-width: 768px) {
    height: 518px;
    width: 264px;
    grid-row: -1;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-self: end;
  max-width: 460px;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    justify-self: center;
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`

`

export const Button = styled.button`
  background-image: ${(props) => props.theme.colors.button};
  border: 0;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow.boxShadow};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1em;
  max-width:301px;
  margin: 2rem 0;
  align-self:end;
  padding: 16px 80px;
  -webkit-user-select: none;
  white-space: nowrap;
  cursor: pointer;


@media (max-width: 768px) {
    font-size: 1rem;
    max-width: 236px;
    align-self:center;
    padding: 16px 48px;
}`;
