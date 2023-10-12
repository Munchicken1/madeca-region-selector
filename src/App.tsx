import Logo from "./assets/madecalogo.png";
import {
  AppContainer,
  ModalContentContainer,
  ModalHeaderText,
  ModalBodyText,
  ModalLink,
  ModalPrimaryButton,
  ModalSecondaryButton,
  BrandLogo,
  Footer,
  FooterText,
} from "./App.styled";

function App() {
  return (
    <AppContainer>
      <BrandLogo src={Logo} />
      <ModalContentContainer>
        <ModalHeaderText>Choose your Country/Region</ModalHeaderText>
        <ModalBodyText>You are visiting madecaderma.com.</ModalBodyText>
        <ModalBodyText>
          Would you like to update your localization?
        </ModalBodyText>
        <ModalPrimaryButton>US & Canada</ModalPrimaryButton>
        <ModalSecondaryButton>International / EN</ModalSecondaryButton>
        <ModalLink>Choose another country / region</ModalLink>
      </ModalContentContainer>
      <Footer>
        <FooterText>Madeca Copyright Goes Here</FooterText>
      </Footer>
    </AppContainer>
  );
}

export default App;
