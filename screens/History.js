import * as React from 'react';
import { StyleSheet, View } from "react-native";
import axios from 'axios';

import HistoryCard from '../components/HistoryCard';

export default function HistoryScreen({ navigation }) {
  const [histories, setHistories] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/history')
      .then(res => {
        console.log(res.data)
        setHistories(res.data)
      })
      .catch((err) => {
        throw new Error(err.response.body.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      {histories.map((history, index) => (
        <HistoryCard key={index} navigation={navigation} source='HILmr' dateTime={history.DateTime} price={history.price} start={history.start} dest={history.dest} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
