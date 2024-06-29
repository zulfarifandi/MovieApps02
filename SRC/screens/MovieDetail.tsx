import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MovieDetail({ navigation }: any): JSX.Element {
  return (
    <View>
      <Text>Movie Detail</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
