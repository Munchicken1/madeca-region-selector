import { useState } from "react";
import Logo from "./assets/madecalogo_white.png";
import ColorLogo from "./assets/madecalogo.png";
import {
  HomeContainer,
  ModalContentContainer,
  ModalHeaderText,
  ModalBodyText,
  ModalLink,
  ModalPrimaryButton,
  ModalSecondaryButton,
  BrandLogo,
  Footer,
  FooterText,
  RegionContainer,
  RegionContentContainer,
  RegionHeaderText,
  RegionSelectorContainer,
  RegionItem,
  BackButton,
  BackIcon,
  DescText,
} from "./App.styled";

function App() {
  const [isHome, setIsHome] = useState(true);
  const pageToggleHandler = () => {
    setIsHome(!isHome);
  };
  return (
    <>
      {isHome ? (
        <HomeContainer>
          <BrandLogo src={Logo} />
          <ModalContentContainer>
            <ModalHeaderText>Choose your Country/Region</ModalHeaderText>
            <ModalBodyText>You are visiting madecaderma.com.</ModalBodyText>
            <ModalBodyText>
              Would you like to update your localization?
            </ModalBodyText>
            <ModalPrimaryButton href="https://www.madeca.com">
              US & Canada
            </ModalPrimaryButton>
            <ModalSecondaryButton href="http://www.madecaderma.com">
              International / EN
            </ModalSecondaryButton>
            <ModalLink onClick={pageToggleHandler}>
              Choose another country / region
            </ModalLink>
          </ModalContentContainer>
        </HomeContainer>
      ) : (
        <RegionContainer $isHome={isHome}>
          <BrandLogo src={ColorLogo} />
          <BackButton onClick={pageToggleHandler}>
            <BackIcon />
          </BackButton>
          <RegionContentContainer>
            <RegionHeaderText>Choose your Country/Region</RegionHeaderText>
            <RegionSelectorContainer>
              <RegionItem>Europe</RegionItem>
              <RegionItem>Korea</RegionItem>
              <RegionItem>Japan</RegionItem>
            </RegionSelectorContainer>
            <RegionSelectorContainer>
              <RegionItem>멕시코</RegionItem>
              <RegionItem>기타</RegionItem>
              <RegionItem>등등</RegionItem>
            </RegionSelectorContainer>
            <DescText>
              These buttons are intended as placeholders, designed to remain
              non-functional.
            </DescText>
          </RegionContentContainer>
        </RegionContainer>
      )}
      <Footer $isHome={isHome}>
        <FooterText>Madeca Copyright Goes Here</FooterText>
      </Footer>
    </>
  );
}

export default App;
