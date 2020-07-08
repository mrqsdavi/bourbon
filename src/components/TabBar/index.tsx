import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
import {Container, Button, Label, PlusWrapper} from './styles';
import icMeuPainelOutline from '../../assets/icons/ic-meupainel-outline';
import icMeuPainelFull from '../../assets/icons/ic-meupainel-full';
import icRelatoriosOutline from '../../assets/icons/ic-relatorios-outline';
import icRelatoriosFull from '../../assets/icons/ic-relatorios-full';
import icCursosOutline from '../../assets/icons/ic-cursos-outline';
import icCursosFull from '../../assets/icons/ic-cursos-full';
import icPlus from '../../assets/icons/ic-plus';

const getIcon = (index: number, focused: boolean) => {
  if (index === 0) {
    return focused ? icMeuPainelFull : icMeuPainelOutline;
  }
  if (index === 1) {
    return focused ? icRelatoriosFull : icRelatoriosOutline;
  }
  if (index === 2) {
    return focused ? icCursosFull : icCursosOutline;
  }

  return focused ? icMeuPainelFull : icMeuPainelOutline;
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <>
            <Button
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <SvgXml xml={getIcon(index, isFocused)} />
              <Label>{label}</Label>
            </Button>
            {index === 1 && (
              <Button
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                <PlusWrapper>
                  <SvgXml xml={icPlus} />
                </PlusWrapper>
              </Button>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default TabBar;
