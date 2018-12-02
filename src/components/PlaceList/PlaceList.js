import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      keyExtractor = { (item, index) => index.toString() }
      renderItem={({item}) => (
        <ListItem
          placeName={item.name}
          placeImage={item.image}
          onItemPressed={() => props.onItemSelected(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
