import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const PrimaryButton = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  height: 54px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const PrimaryText = styled.Text`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: ${Colors.white};
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid ${Colors.primary};
`;

export const SecondaryText = styled(PrimaryText)``;
