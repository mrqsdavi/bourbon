import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import {Button, TransparentButton} from '../../components/Button';
import Header from '../../components/Header';
import icClimbeFlat from '../../assets/icons/ic-climbe-flat';
import {
  Background,
  SafeAreaView,
  Container,
  TextContainer,
  InputsContainer,
  ButtonsContainer,
} from './styles';
import Colors from '../../theme/Colors';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <SafeAreaView>
        <Header />
        <Container>
          <TextContainer>
            <Title>É sempre</Title>
            <Title>bom te ver</Title>
            <InputsContainer>
              <TextInput label="CPF ou Email" autoCapitalize="none" />
              <TextInput
                label="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </InputsContainer>
          </TextContainer>

          <ButtonsContainer>
            <Button>Entrar</Button>
            <TransparentButton onPress={() => navigation.navigate('SignUp')}>
              Ainda não tenho cadastro
            </TransparentButton>
          </ButtonsContainer>
        </Container>
      </SafeAreaView>
    </Background>
  );
};

export default SignIn;
