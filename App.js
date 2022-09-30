import React, {useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import {useRef} from 'react';
import {useEffect} from 'react';

export default () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Timer
        time={20}
        radius={100}
        strokeWidth={20}
        color={'black'}
        delay={0}
      />
      <Timer time={60} radius={50} strokeWidth={5} color={'green'} delay={0} />

      <Timer
        time={30}
        radius={150}
        strokeWidth={15}
        color={'purple'}
        delay={1000}
      />
    </View>
  );
};

const AnimatedCircle = new Animated.createAnimatedComponent(Circle);

const Timer = ({
  time = 60,
  radius = 50,
  strokeWidth = 10,
  color = 'cyan',
  delay = 0,
}) => {
  const animatedValue = useRef(new Animated.Value(time)).current;

  const halfCircle = radius + strokeWidth;
  const strokeDasharray = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [timer, setTimer] = useState(time);

  const Animate = () => {
    Animated.timing(animatedValue, {
      delay,
      toValue: 0,
      duration: time * 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animate();

    animatedValue.addListener(value => {
      Promise.all([
        setStrokeDashoffset(
          strokeDasharray - strokeDasharray * (value.value / time),
        ),
        setTimer(value.value),
      ]);
    });
  }, []);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            r={radius}
            cx={'50%'}
            cy={'50%'}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            r={radius}
            cx={'50%'}
            cy={'50%'}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap={'round'}
          />
        </G>
      </Svg>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Text style={[{fontSize: radius * 0.5}]}>{timer.toFixed(0)}</Text>
      </View>
    </View>
  );
};
