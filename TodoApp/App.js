import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';
const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Code 1'},
    {id: uuidv4(), text: 'Code 2'},
    {id: uuidv4(), text: 'Code 3'},
  ]);

  const deleteItem = (id) => {
    // console.log('Delete Item function called');
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    setItems((prevItems) => {
      return [{id: uuidv4(), text}, ...prevItems];
    });
  };
  return (
    <View style={styles.container}>
      <Header title={'Todos'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // text: {
  //   color: 'darkslateblue',
  //   fontSize: 20,
  // },
});
export default App;
