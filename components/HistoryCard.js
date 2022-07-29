import * as React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Asset } from 'expo-asset';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HistoryCardComponent(props) {
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
    <View style={styles.cardContainer}>
      <Image source={Asset.fromModule(require(`../assets/${props.source}.png`)).uri} style={styles.mapImage}></Image>
      <View style={styles.statusContainer}>
        <Text style={styles.fontBold}>{props.dateTime}</Text>
        {props.price < 0 ?
          <Text style={[styles.fontBold, styles.textDanger]}>CANCELLED</Text> :
          <Text style={styles.fontBold}>${props.price.toFixed(2)}</Text>}
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.addressContainer}>
        <View style={styles.iconContainer}>
          <Animated.View style={logoStyles}>
            <FontAwesome5 name="location-arrow" style={styles.arrowIcon} />
          </Animated.View>
          <View style={styles.dotSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <View style={styles.yellowCircle} />
        </View>
        <View style={styles.getStartedContainer}>
          <Text>{props.start}</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.destAdress}>{props.dest}</Text>
        </View>
      </View>
      <Pressable style={styles.requestButton} onPress={() => props.navigation.navigate('TripDescription', {price: props.price, start: props.start, dest: props.dest})}>
        <Text style={styles.requestText}>More details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '100%',
    marginVertical: 10,
  },
  mapImage: {
    height: 200,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  textDanger: {
    color: 'red',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  addressContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'white',
    paddingEnd: 15,
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
    backgroundColor: 'white',
    flexGrow: 1,
    paddingEnd: 15,
  },
  destAdress: {
    fontWeight: 'bold',
  },
  requestButton: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#404040',
    paddingVertical: 16,
    borderRadius: 5,
    marginTop: 15,
  },
  requestText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 14,
  },
});
