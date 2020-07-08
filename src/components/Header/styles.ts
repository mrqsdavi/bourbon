import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 46px;
`;

export const Title = styled.Text`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${Colors.white};
`;

export const Button = styled.TouchableOpacity`
  height: 100%;
  min-width: 46px;
  justify-content: center;
  align-items: center;
`;
