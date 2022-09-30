// // import React, {useEffect, useRef, useState} from 'react';
// // import {View, StyleSheet, Animated, Easing, Text} from 'react-native';
// // import Svg, {G, Circle} from 'react-native-svg';

// // const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// // export default () => {
// //   return (
// //     <View style={styles.container}>
// //       <Donuts />
// //     </View>
// //   );
// // };

// // const Donuts = ({
// //   percentage = 0.5,
// //   radius = 100,
// //   strokeWidth = 10,
// //   duration = 1000,
// //   color = 'tomato',
// //   delay = 0,
// //   textColor,
// //   max = 100,
// // }) => {
// //   const CircleRef = useRef();
// //   const halfCircle = radius + strokeWidth;
// //   const strokeDasharray = 2 * Math.PI * radius;
// //   const [strokeDashoffset, setStrokeDashoffset] = useState(strokeDasharray);
// //   const animatedValue = useRef(new Animated.Value(strokeDasharray)).current;

// //   const animate = toValue => {
// //     return Animated.timing(animatedValue, {
// //       toValue,
// //       duration,
// //       delay,
// //       useNativeDriver: true,
// //       easing: Easing.circle,
// //     }).start();
// //   };

// //   useEffect(() => {
// //     animate(strokeDasharray - percentage * strokeDasharray);

// //     animatedValue.addListener(v => {
// //       if (CircleRef.current) {
// //         setStrokeDashoffset(v.value);
// //       }
// //     });
// //   }, []);

// //   return (
// //     <View>
// //       <Svg
// //         width={radius * 2}
// //         height={radius * 2}
// //         viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
// //         <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
// //           <Circle
// //             cx={'50%'}
// //             cy={'50%'}
// //             stroke={'green'}
// //             strokeWidth={strokeWidth}
// //             r={radius}
// //             strokeOpacity={0.2}
// //           />
// //           <AnimatedCircle
// //             ref={CircleRef}
// //             // fill={'tomato'}
// //             cx={'50%'}
// //             cy={'50%'}
// //             stroke={color}
// //             strokeWidth={strokeWidth}
// //             r={radius}
// //             strokeDasharray={strokeDasharray}
// //             strokeDashoffset={strokeDashoffset}
// //             strokeLinecap={'round'}
// //           />
// //         </G>
// //       </Svg>
// //       {/* <Text
// //         style={[
// //           StyleSheet.absoluteFillObject,
// //           {
// //             fontSize: radius / 2,
// //             textAlign: 'center',
// //             textAlignVertical: 'center',
// //           },
// //         ]}>
// //         {strokeDashoffset}
// //       </Text> */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// import React, {useEffect, useRef, useState} from 'react';
// import {View, Text, Animated, Easing} from 'react-native';
// import Svg, {Circle, G} from 'react-native-svg';

// export default () => {
//   const translateX = useRef(new Animated.Value(200)).current;

//   useEffect(() => {
//     animate();
//   }, []);

//   const animate = () => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.delay(500),
//         Animated.timing(translateX, {
//           toValue: -100,
//           duration: 500,
//           useNativeDriver: true,
//           easing: Easing.linear,
//         }),
//       ]),
//     ).start();
//   };

//   const opacity = translateX.interpolate({
//     inputRange: [-100, -50, 200],
//     outputRange: [0, 1, 1],
//   });

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'black',
//         flexDirection: 'row',
//       }}>
//       <Packman />
//       <Animated.View
//         style={[
//           {
//             backgroundColor: 'white',
//             height: 50,
//             width: 50,
//             borderRadius: 25,
//           },
//           {transform: [{translateX: translateX}], opacity},
//         ]}
//       />
//     </View>
//   );
// };

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// const Packman = () => {
//   const [strokeDasharray, setStrokeDasharray] = useState(126);
//   const [strokeDashoffset, setStrokeDashoffset] = useState(-15.5);

//   const animatedValue = useRef(new Animated.Value(strokeDasharray)).current;

//   useEffect(() => {
//     animate();

//     animatedValue.addListener(value => {
//       setStrokeDasharray(value.value);
//       setStrokeDashoffset(((157 - value.value) / 2) * -1);
//     });
//   }, []);

//   const animate = () => {
//     return Animated.loop(
//       Animated.sequence([
//         Animated.timing(animatedValue, {
//           toValue: 157,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//         Animated.timing(animatedValue, {
//           toValue: 126,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//       ]),
//     ).start();
//   };

//   return (
//     <View>
//       <Svg width={200} height={200} viewBox="0 0 100 100">
//         <G>
//           <AnimatedCircle
//             stroke={'yellow'}
//             cx="50%"
//             cy="50%"
//             r="25%"
//             fill={'none'}
//             strokeDasharray={strokeDasharray}
//             strokeDashoffset={strokeDashoffset}
//             strokeWidth={'50%'}
//           />
//           <Circle cx={'30%'} cy={'30%'} r="5%" fill={'black'} />
//         </G>
//       </Svg>
//     </View>
//   );
// };

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
