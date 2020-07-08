import styled from 'styled-components/native';
import Colors from '../../theme/Colors';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
const screenWidth = Math.round(Dimensions.get('window').width);

export const ContentWidth = screenWidth;

export const Background = styled.View`
  background-color: ${Colors.background};
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  horizontal: true,
  scrollEnabled: false,
})`
  flex: 1;
  width: 100%;
`;

export const PageContent = styled.View`
  height: 100%;
  width: ${screenWidth};
  max-width: 100%;
  padding: 0 19px;
  justify-content: center;
`;
