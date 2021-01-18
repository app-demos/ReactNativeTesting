import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Role from './Role';

const User = ({user, isSelected, select}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: '#c8e7ff',
        borderRadius: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          style={{height: 50, width: 50, borderRadius: 25}}
          source={{uri: user.picture.large}}
        />
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Text style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
            {user.name.first + ' ' + user.name.last}
          </Text>
          <Text>{user.email || '-'}</Text>
          <Role role={user.role} />
        </View>
      </View>

      <View
        style={{
          paddingLeft: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: isSelected ? '#001845' : '#00b4d8',
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginTop: 5,
            borderRadius: 5,
          }}
          onPress={() => select(isSelected)}>
          <Text style={{color: isSelected ? '#FFFFFF' : '#000000'}}>
            {isSelected ? 'Selected' : 'Select'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;
