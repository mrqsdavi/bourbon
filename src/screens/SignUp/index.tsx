import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, ScrollView, Keyboard} from 'react-native';
import {
  Background,
  SafeAreaView,
  Container,
  Content,
  PageContent,
  ContentWidth,
} from './styles';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import BottomProgress from '../../components/BottomProgress';
import Space from '../../components/Space';
import CheckBox from '../../components/CheckBox';

interface SignUpModel {
  name?: string;
}

export default function SignUp() {
  const scrollRef = useRef<ScrollView>(null);
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [acceptTerms, setAcceptTerms] = useState(true);
  // const [errors, setErrors] = useState<SignUpModel>({});

  const back = () => {
    if (step > 1) {
      goToPage(step - 1);
    } else {
      navigation.goBack();
    }
  };

  const goToPage = (page: number) => {
    Keyboard.dismiss();
    setStep(page);
    scrollRef.current?.scrollTo({
      x: (page - 1) * ContentWidth,
    });
  };

  const onFinish = () => {
    navigation.navigate('Home');
  };

  return (
    <Background>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView>
        <Container>
          <Header title="Novo cadastro" onLeftPress={back} />
          <Content ref={scrollRef}>
            <PageContent>
              <TextInput label="Nome completo" />
            </PageContent>
            <PageContent>
              <TextInput label="Email" autoCapitalize="none" />
            </PageContent>
            <PageContent>
              <TextInput label="CPF" autoCapitalize="none" />
            </PageContent>
            <PageContent>
              <TextInput label="Data de nascimento" autoCapitalize="none" />
            </PageContent>
            <PageContent>
              <TextInput
                label="Senha"
                autoCapitalize="none"
                secureTextEntry={true}
              />
              <Space space={18} />
              <TextInput
                label="Repita sua senha"
                autoCapitalize="none"
                secureTextEntry={true}
              />
            </PageContent>
            <PageContent>
              <TextInput label="Cargo" autoCapitalize="none" />
            </PageContent>
          </Content>
        </Container>
      </SafeAreaView>
      <BottomProgress
        label={step < 6 ? 'Prosseguir' : 'Concluir'}
        step={step}
        totalSteps={6}
        onChange={goToPage}
        onFinish={onFinish}
      />
    </Background>
  );
}
