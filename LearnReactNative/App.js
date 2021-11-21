/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App: () => Node = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  return (
    <SafeAreaView style={styels.full}>
      <Counter
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </SafeAreaView>
  );
};

const styels = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default App;
