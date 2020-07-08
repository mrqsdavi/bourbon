import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import Title from '../../components/Title';
import {Button, TransparentButton} from '../../components/Button';
import icClimbeFlat from '../../assets/icons/ic-climbe-flat';
import {
  SafeAreaView,
  Container,
  Background,
  TextContainer,
  ButtonsContainer,
} from './styles';

export default function Login() {
  const navigation = useNavigation();

  return (
    <Background>
      <SafeAreaView>
        <Container>
          <TextContainer>
            {['Registre seus', 'pontos.', 'Edifício Bourbon'].map(
              (title, index) => (
                <Title key={index}>{title}</Title>
              ),
            )}
            {/* <SvgXml xml={icClimbeFlat} /> */}
          </TextContainer>

          <ButtonsContainer>
            <Button onPress={() => navigation.navigate('SignIn')}>
              Entrar
            </Button>
            <TransparentButton onPress={() => navigation.navigate('SignUp')}>
              Ainda não tenho cadastro
            </TransparentButton>
            {/* <TransparentButton onPress={() => navigation.navigate('Home')}>
              Entrar sem login
            </TransparentButton> */}
          </ButtonsContainer>
        </Container>
      </SafeAreaView>
    </Background>
  );
}
