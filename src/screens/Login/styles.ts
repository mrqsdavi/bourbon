import styled from 'styled-components/native';
const LoginBackground = require('../../assets/backgrounds/login.jpg');

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  padding-left: 20px;
`;

export const Background = styled.ImageBackground.attrs({
  source: LoginBackground,
})`
  flex: 1;
  resize-mode: cover;
`;

export const TextContainer = styled.View`
  padding-top: 70px;
`;

export const ButtonsContainer = styled.View`
  min-height: 115px;
  justify-content: space-between;
`;
