import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const Container = styled.View``;

interface ILabel {
  color: string;
}

export const Label = styled.Text<ILabel>`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

interface IInput extends ILabel {
  focused: boolean;
}

export const Input = styled.TextInput<IInput>`
  font-family: Asap-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  min-height: 42px;
  color: ${Colors.text};
  border-color: ${(props) => (props.focused ? Colors.primary : props.color)};
  border-style: solid;
  border-bottom-width: 1px;
`;
