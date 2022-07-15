import { Animated, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import LocationInput from './LocationInput';

export default function EditScreenInfo(props) {
  const logoStyles = [styles.logoStyle];
  const animation = new Animated.Value(1);

  Animated.timing(animation, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true
  }).start();

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['315deg', '135deg']
  });
  const animatedStyles = { transform: [{ rotate: rotateInterpolate }] };
  logoStyles.push(animatedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Animated.View style={logoStyles}>
          <FontAwesome5 name="location-arrow" style={styles.arrowIcon} />
        </Animated.View>
        <View style={styles.dotSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.yellowCircle} />
      </View>
      <View style={styles.getStartedContainer}>
        <LocationInput
          location={props.pickup}
          setLocation={props.setPickup}
          placeholder="Enter pickup location"
          focusIn={() => props.focusIn(0)}
          focusOut={() => props.focusOut(0)}
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <LocationInput
          location={props.dropoff}
          setLocation={props.setDropoff}
          placeholder="Enter dropoff location"
          focusIn={() => props.focusIn(1)}
          focusOut={() => props.focusOut(1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#404040',
  },
  dotSeparator: {
    marginVertical: 3,
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'dotted',
    flexGrow: 1,
    borderLeftWidth: 2,
    borderLeftColor: 'darkgrey',
  },
  yellowCircle: {
    padding: 4,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  getStartedContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    paddingEnd: 15,
  },
  separator: {
    marginVertical: 3,
    height: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
});
