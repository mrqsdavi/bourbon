import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

const Text = styled.Text`
  font-family: Poppins-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: ${Colors.white};
`;

const Title: React.FC = ({...props}) => {
  return <Text>{props.children}</Text>;
};

export default Title;
