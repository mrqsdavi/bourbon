import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {Container, Title, Button} from './styles';
import icBack from '../../assets/icons/ic-back';

interface IHeader {
  title?: string;
  onLeftPress?: Function;
}

const Header: React.FC<IHeader> = ({title, onLeftPress}) => {
  const navigation = useNavigation();

  const onLeft = () => {
    if (onLeftPress) {
      onLeftPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Button onPress={onLeft}>
        <SvgXml xml={icBack} />
      </Button>
      <Title>{title}</Title>
      <Button />
    </Container>
  );
};

export default Header;
