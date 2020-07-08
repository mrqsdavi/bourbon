import React, {useEffect, useRef} from 'react';
import {
  Transitioning,
  Transition,
  TransitioningView,
} from 'react-native-reanimated';

const TransitionFromLeft: React.FC = ({children}) => {
  const transitionRef = useRef<TransitioningView>(null);

  useEffect(() => transitionRef?.current?.animateNextTransition());

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} interpolation="easeIn" />
      <Transition.Change />
      <Transition.Together>
        <Transition.In
          type="slide-left"
          durationMs={400}
          interpolation="easeOut"
          propagation="top"
        />
        <Transition.In type="fade" durationMs={200} delayMs={200} />
      </Transition.Together>
    </Transition.Sequence>
  );

  return (
    <Transitioning.View
      ref={transitionRef}
      transition={transition}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}>
      {children}
    </Transitioning.View>
  );
};

export default TransitionFromLeft;
