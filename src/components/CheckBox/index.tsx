import React from 'react';
import {Container, CheckContainer, CheckView, Label} from './styles';

interface ICheckBox {
  label: string;
  checked: boolean;
  onChange: Function;
}

const CheckBox: React.FC<ICheckBox> = ({label, checked, onChange}) => {
  return (
    <Container onPress={onChange}>
      <CheckContainer>{checked && <CheckView />}</CheckContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default CheckBox;
