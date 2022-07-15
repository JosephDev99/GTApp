import * as React from 'react';
import { Text, View } from "react-native";

export default function AddressScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>My Addresses</Text>
    </View>
  );
}
