import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default function MyComponent({ navigation }) {
  const [count, setCount] = useState(0);
  const [isHungry, setIsHungry] = useState(true);

  const incrementHandler = useCallback(() => {
    setCount(() => count + 1);
  }, [count]);

  // const decrementHandler = () => {
  //   setCount(() => count - 1);
  // };

  return (
    <>
      <Text>App.js counter app, Android version: {Platform.Version}.</Text>
      <StatusBar style='auto' />
      <TouchableOpacity style={styles.button} onPress={incrementHandler}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(() => count - 1)}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>
      <View>
        <Text>You clicked {count} times</Text>
        <Button
          onPress={() => {
            setIsHungry(false);
          }}
          disabled={!isHungry}
          title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
        />
        <Button
          title='Go to Home Page'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
