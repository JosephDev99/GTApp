import * as React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Asset } from 'expo-asset';
import { AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';

export default function TripDescriptionScreen({ route }) {
  const { price, start, dest } = route.params;
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
      <View style={styles.cardContainer}>
        <View style={styles.directionRow}>
          <Text>Route ID:&nbsp;</Text>
          <Text style={styles.idNo}>HD345</Text>
        </View>
        <Image source={Asset.fromModule(require(`../assets/HILmr.png`)).uri} style={styles.mapImage}></Image>
        <View style={[styles.statusContainer, styles.rowBetween]}>
          <View style={styles.directionRow}>
            <AntDesign name="calendar" size={18} style={styles.mr5} />
            <Text style={styles.fontBold}>29 April</Text>
          </View>
          <View style={styles.directionRow}>
            <Feather name="clock" size={18} style={styles.mr5} />
            <Text style={styles.fontBold}>16:12</Text>
          </View>
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
            <Text>{start}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text>{dest}</Text>
          </View>
        </View>
        <Text style={styles.fontBold}>TRIP FARE</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.rowBetween}>
          <Text>Credit Card</Text>
          <Text style={styles.textBlue}>${price.toFixed(2)}</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text>Tip</Text>
          <Text style={styles.textBlue}>$0.00</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text>Total Paid Amount</Text>
          <Text style={styles.textBlue}>${price.toFixed(2)}</Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.rowBetween}>
          <View style={styles.directionRow}>
            <Image source={Asset.fromModule(require('../assets/avatar.png')).uri} style={[styles.avatarImg, styles.tile]}></Image>
            <View style={styles.pl15}>
              <Text style={styles.fontBold}>Sergey</Text>
              <Text style={styles.fontBold}>Gubelmayer</Text>
            </View>
          </View>
          <View style={styles.directionRow}>
            <Pressable style={[styles.tile, styles.bgDark, styles.mr5]}>
              <Entypo name="chat" color="white" size={16} />
            </Pressable>
            <Pressable style={[styles.tile, styles.bgWarning]}>
              <Entypo name="phone" color="white" size={16} />
            </Pressable>
          </View>
        </View>
        <View style={styles.detailDescription}>
          <View style={styles.rowBetween}>
            <View>
              <Text>Car Model:</Text>
              <Text style={styles.fontBold}>Toyota Prius</Text>
            </View>
            <View>
              <Text>Plate Number:</Text>
              <Text style={[styles.fontBold, styles.textRight]}>GL-278-LG</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textCenter}>RATED:</Text>
            <View style={[styles.directionRow, styles.rowCenter]}>
              <AntDesign name="star" color="orange" size={16} />
              <AntDesign name="star" color="orange" size={16} />
              <AntDesign name="star" color="orange" size={16} />
              <AntDesign name="star" color="orange" size={16} />
              <AntDesign name="staro" color="orange" size={16} />
            </View>
          </View>
        </View>
        <Text>Notification</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
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
  directionRow: {
    flexDirection: 'row',
  },
  idNo: {
    fontWeight: 'bold',
  },
  mapImage: {
    height: 200,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    paddingBottom: 20,
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
  textBlue: {
    color: 'blue',
  },
  tile: {
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pl15: {
    paddingLeft: 15,
  },
  bgDark: {
    backgroundColor: '#404040',
  },
  bgWarning: {
    backgroundColor: '#e0e010',
  },
  mr5: {
    marginRight: 5,
  },
  detailDescription: {
    paddingVertical: 20,
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  rowCenter: {
    justifyContent: 'center',
  },
});
