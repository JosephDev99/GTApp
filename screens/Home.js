import { useState } from 'react';
import { Animated, Dimensions, FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';

var isHidden = true;

const whiteHeight = Dimensions.get("window").height * 0.7;

const locations = [
  {
    id: 0,
    title: 'AAA Worcester Mountain Street East, MA, USA'
  },
  {
    id: 1,
    title: 'Aaron Lazare Medical Research Building Plantation Street...'
  },
  {
    id: 2,
    title: 'Aachen Germany'
  },
  {
    id: 3,
    title: 'AAA Auburn Southbridge Street, Auburn, MA, USA'
  },
  {
    id: 4,
    title: 'Aare Switzerland'
  }
];

export default function HomeScreen() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [bounceValue, setBounceValue] = useState(new Animated.Value(whiteHeight));
  const [focus, setFocus] = useState(-1);
  const [tempFocus, setTempFocus] = useState(-1);

  const _toggleSubview = () => {
    var toValue = whiteHeight;

    if(isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & whiteHeight depending on its current state
    //whiteHeight comes from the style below, which is the height of the subview.
    Animated.spring(
      bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start();
    
    isHidden = !isHidden;
  }

  const focusIn = (flag) => {
    _toggleSubview();
    if (focus === -1) {
      setFocus(flag);
    }
  }

  const focusOut = (flag) => {
    _toggleSubview();
    if (focus === flag) {
      setTempFocus(focus);
      setFocus(-1);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: Asset.fromModule(require('../assets/hero_mobile_maps_sdks.png')).uri}} resizeMode="cover" style={styles.image}>
        <EditScreenInfo pickup={pickup} setPickup={setPickup} dropoff={dropoff} setDropoff={setDropoff} focusIn={focusIn} focusOut={focusOut} />
        { pickup && dropoff ?
        <Pressable style={styles.requestButton}>
          <Text style={styles.requestText}>Request a ride</Text>
        </Pressable> : null }
        <Animated.View
          style={[styles.subView,
            {transform: [{translateY: bounceValue}]}]}
        >
          <FlatList
            data={focus ? locations.filter((location) => {return location.title.includes(dropoff)}) : locations.filter((location) => {return location.title.includes(pickup)})}
            renderItem={({ item }) => (
              <Pressable onPress={() => (tempFocus ? setDropoff(item.title) : setPickup(item.title))} style={styles.descriptionContainer}>
                <Ionicons name="location" size={18} color="grey" style={styles.descriptionIcon} />
                <Text style={styles.description}>{item.title}</Text>
              </Pressable>
            )}
            keyExtractor={item => item.id}
            style={styles.searchResultsContainer}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  requestButton: {
    width: '90%',
    textAlign: 'center',
    backgroundColor: '#e0c000',
    paddingVertical: 16,
  },
  requestText: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 14,
  },
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF"
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: whiteHeight,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  descriptionIcon: {
    paddingHorizontal: 20,
  },
  description: {
    color: 'black',
  },
  searchResultsContainer: {
    padding: 10,
  },
});
