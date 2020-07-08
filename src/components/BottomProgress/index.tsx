import React, {useEffect, useRef} from 'react';
import {SvgXml} from 'react-native-svg';
import Animated, {Easing, Clock, Value} from 'react-native-reanimated';
import {Container, Content, Title, Button, ContentWidth} from './styles';
import icArrowRight from '../../assets/icons/ic-arrow-right';
import Colors from '../../theme/Colors';

const {
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  concat,
} = Animated;

function runTiming(clock: Clock, value: Value<number>, dest: Value<number>) {
  const state = {
    finished: new Value(0),
    position: value,
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 200,
    toValue: dest,
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      // If the clock isn't running we reset all the animation params and start the clock
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    // we run the step here that is going to update position
    timing(clock, state, config),

    debug('position', state.position),
    debug('destination', config.toValue),
    // if the animation is over we stop the clock
    cond(state.finished, debug('stop clock', stopClock(clock))),
    // we made the block return the updated position
    state.position,
  ]);
}

interface IBottomProgress {
  label?: string;
  step: number;
  totalSteps: number;
  onChange: Function;
  onFinish?: Function;
}

const BottomProgress: React.FC<IBottomProgress> = ({
  label,
  step,
  totalSteps,
  onChange,
  onFinish,
}) => {
  const clock = new Clock();
  const animation = new Value<number>(0);
  const position = new Value<number>(0);
  const transX = runTiming(clock, position, animation);
  const currentStep = useRef<number>(step);

  useEffect(() => {
    const currentProgress = Math.max(
      Math.min(currentStep.current / totalSteps, 1),
      0,
    );
    const progress = Math.max(Math.min(step / totalSteps, 1), 0);
    position.setValue(currentProgress * ContentWidth);
    animation.setValue(progress * ContentWidth);
    currentStep.current = step;
  }, [step, totalSteps, animation, position]);

  const progressStyle = {
    width: transX,
    height: 5,
    backgroundColor: Colors.primary,
  };

  return (
    <Container>
      <Animated.View style={progressStyle} />
      <Content>
        <Title>
          {step}/{totalSteps}
        </Title>
        <Title>{label}</Title>
        <Button
          onPress={() => {
            if (step < totalSteps) {
              onChange(step + 1);
            } else {
              onFinish();
            }
          }}>
          <SvgXml xml={icArrowRight} />
        </Button>
      </Content>
    </Container>
  );
};

export default BottomProgress;
