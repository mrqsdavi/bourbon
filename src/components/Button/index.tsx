import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  PrimaryButton,
  PrimaryText,
  SecondaryButton,
  SecondaryText,
} from './styles';

export const Button: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return (
    <PrimaryButton {...props}>
      <PrimaryText>{children}</PrimaryText>
    </PrimaryButton>
  );
};

export const TransparentButton: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return (
    <SecondaryButton {...props}>
      <SecondaryText>{children}</SecondaryText>
    </SecondaryButton>
  );
};
