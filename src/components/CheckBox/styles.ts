import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
`;

export const CheckContainer = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${Colors.white};
  margin-top: 5px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

export const CheckView = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: ${Colors.primary};
`;

export const Label = styled.Text`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: ${Colors.white};
`;
