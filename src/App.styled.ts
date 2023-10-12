import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 345px;
  height: 500px;
  color: white;
`;
export const ModalHeaderText = styled.p`
  font-size: 26px;
  font-weight: 600;
`;
export const ModalBodyText = styled.p`
  font-size: 18px;
  margin: 0;
`;
export const ModalLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
  margin-top: 50px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: #dddddd;
  transition: all 0.5s ease-out;
  &:hover {
    color: white;
  }
`;

export const ModalPrimaryButton = styled.button`
  padding: 20px 80px;
  border: none;
  border-radius: 0.8rem;
  color: black;
  background-color: white;
  font-weight: 600;
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;
export const ModalSecondaryButton = styled.button`
  padding: 20px 80px;
  border: none;
  border-radius: 0.8rem;
  color: black;
  background-color: white;
  font-weight: 600;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;
export const BrandLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 10%;
  max-width: 350px;
  transform: translateX(-50%);
`;
export const Footer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  color: #dddddd;
`;
export const FooterText = styled.p`
  font-size: 12px;
  margin: 0;
`;
