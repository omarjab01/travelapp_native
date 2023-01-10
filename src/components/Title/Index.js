import React, { useState } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Title = () => {

  const [test, setTest] = useState('');
  console.log('update');

  const changeText = () => {
    setTest('Testo Aggiornato');
  };

  return (
    <Text style={styles.title} onPress={changeText}>{test}</Text>
  );
};

Title.defaultProps = {
  testo: 'Titolo'
};

export default React.memo(Title);
