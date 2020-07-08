import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Container, Label, Input} from './styles';
import Colors from '../../theme/Colors';

interface ITextInput extends TextInputProps {
  label: string;
  color?: string;
  error?: string;
}

export const ITextInput;

const TextInput: React.FC<ITextInput> = ({label, color, error, ...rest}) => {
  const [focused, setFocused] = useState(false);

  const getLabelColor = () => {
    if (error) {
      return Colors.danger;
    }
    if (color) {
      return color;
    }
    return Colors.white;
  };

  return (
    <Container>
      <Label color={getLabelColor()}>{label}</Label>
      <Input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={focused}
        color={getLabelColor()}
        {...rest}
      />
    </Container>
  );
};

export default TextInput;
