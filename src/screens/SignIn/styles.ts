import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
const SignInBackground = require('../../assets/backgrounds/login.jpg');

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Background = styled.ImageBackground.attrs({
  source: SignInBackground,
})`
  flex: 1;
  resize-mode: cover;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextContainer = styled.View`
  padding-top: 70px;
`;

export const InputsContainer = styled.View`
  padding: 20px;
  margin-top: 34px;
  border-radius: 5px;
  min-height: 175px;
  justify-content: space-between;
  background-color: #00000055;
`;

export const ButtonsContainer = styled.View`
  min-height: 124px;
  justify-content: space-between;
`;
