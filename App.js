import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ //prop.concat
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {//chỉ ra mảng của place và thự hiện tách mảng tương đương xoá mảng
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null 
      };
    });
  };

  modalClosedHandler = () => { //thay đổi state khi đồi thì modal sẽ biến mất
    this.setState({
      selectedPlace: null
    });
  }; 

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {// prop.find là hàm tiềm kiếm của 
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

// flow của ứng dụng
// 1 thêm sản phẩm 
// comp liên quản gồm App, PlaceList and ListItem , PlaceInput 