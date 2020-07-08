import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {getBottomSpace} from 'react-native-iphone-x-helper';
import Colors from '../../theme/Colors';

const screenWidth = Math.round(Dimensions.get('window').width);
export const ContentWidth = screenWidth;

export const Container = styled.View`
  background-color: ${Colors.white};
`;

export const Content = styled.View`
  height: 92px;
  background-color: ${Colors.primary};
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-bottom: ${getBottomSpace}px;
`;

export const Title = styled.Text`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: ${Colors.white};
  min-width: 50px;
`;

export const Button = styled.TouchableOpacity`
  height: 100%;
  min-width: 50px;
  justify-content: center;
  align-items: center;
`;
