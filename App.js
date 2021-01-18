import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';

import User from './components/User';
import {users} from './users';

const App: () => React$Node = () => {
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  const renderItem = ({item, index}) => (
    <User
      select={(isSelected) => {
        if (isSelected) {
          setSelectedUsers(
            selectedUsers.filter((_, itemIndex) => itemIndex !== index),
          );
        } else {
          setSelectedUsers(selectedUsers.concat([index]));
        }
      }}
      isSelected={selectedUsers.includes(index)}
      user={item}
    />
  );
  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
