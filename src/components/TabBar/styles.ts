import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import Colors from '../../theme/Colors';

export const Container = styled.View`
  flex-direction: row;
  padding-bottom: ${getBottomSpace()}px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  min-height: 40px;
`;

export const PlusWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  color: #626f72;
`;
