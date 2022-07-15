import * as React from 'react';
import { StyleSheet, View } from "react-native";

import HistoryCard from '../components/HistoryCard';

export default function HistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HistoryCard navigation={navigation} source='HILmr' dateTime='29 April, 16:12' price={-1} start='157 Highland Street' dest='919 Main Street' />
      <HistoryCard navigation={navigation} source='GoogleMapTA' dateTime='26 May, 19:11' price={7} start='315 Avenue C' dest='Old Tbilisi' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
