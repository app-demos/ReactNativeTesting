import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS} from '../constants';

const Role = ({role}) => {
  const backgroundColor = COLORS[role];

  return (
    <View
      style={{
        backgroundColor,
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 10}}>{role}</Text>
    </View>
  );
};

export default Role;
