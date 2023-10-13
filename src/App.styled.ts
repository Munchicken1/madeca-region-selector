import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IProps {
  $isHome: boolean;
}

export const HomeContainer = styled.div`
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

export const ModalPrimaryButton = styled.a`
  padding: 20px 80px;
  border: none;
  border-radius: 0.8rem;
  color: white;
  background-color: #333333;
  font-weight: 600;
  width: 190px;
  margin-top: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
  }
`;
export const ModalSecondaryButton = styled.a`
  padding: 20px 80px;
  border: none;
  border-radius: 0.8rem;
  color: white;
  background-color: #333333;
  font-weight: 600;
  width: 190px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
  }
`;
export const BrandLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 10%;
  max-width: 350px;
  transform: translateX(-50%);
`;
export const Footer = styled.div<IProps>`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  ${(props) => (props.$isHome ? `color: #eeeeee;` : `color: #333333;`)};
  transition: all 0.5s ease-out;
`;
export const FooterText = styled.p`
  font-size: 12px;
  margin: 0;
`;

// Region Selector Page Styles

export const RegionContainer = styled.div<IProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f0f0f3;
`;
export const RegionContentContainer = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RegionHeaderText = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
`;
export const RegionSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  min-width: 300px;
`;
export const RegionItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 30px 30px;
  min-width: 50px;
  text-align: center;
  margin: 20px;
  border-radius: 1.5rem;
  box-shadow: -4px -4px 6px #ffffff, 4px 4px 6px rgba(174, 174, 192, 0.4),
    4px 4px 6px #ffffff, -4px -4px 6px rgba(174, 174, 192, 0.4);
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: -4px -4px 6px rgba(174, 174, 192, 0.4), 4px 4px 6px #ffffff,
      4px 4px 6px rgba(174, 174, 192, 0.4), -4px -4px 6px #ffffff;
    transition: all 0.5s ease-out;
  }
`;
export const BackButton = styled.span`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  cursor: pointer;
  border-radius: 2rem;

  box-shadow: -4px -4px 6px #ffffff, 4px 4px 6px rgba(174, 174, 192, 0.4),
    4px 4px 6px #ffffff, -4px -4px 6px rgba(174, 174, 192, 0.4);
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: -4px -4px 6px rgba(174, 174, 192, 0.4), 4px 4px 6px #ffffff,
      4px 4px 6px rgba(174, 174, 192, 0.4), -4px -4px 6px #ffffff;
  }
`;
export const BackIcon = styled(ArrowBackIcon)`
  width: 40px !important;
  height: 40px !important;
`;
export const DescText = styled.p`
  color: #333333;
  font-size: 12px;
`;
