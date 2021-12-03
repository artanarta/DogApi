import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Image, FlatList   } from "react-native";
import { Text } from 'native-base';
import { ListItem } from "react-native-elements";

// Import Axios
import axios from "axios";

const Pic = () => {
  //Init State
  const [dataPic, setDataPic] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.clear();
  console.log(dataPic, "list dog")

  // Create LifeCycle
  useEffect(() => {
    //Function Exception
    getPicData();
  }, [currentPage]);

  // Create Function to fetch
  const getPicData = () => {
    setIsLoading(true);
    axios
      .get(`https://dog.ceo/api/breed/hound/images/random/${currentPage}`)
      .then((res) => {
        setDataPic([...dataPic, ...res.data.message]);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

   //   Create Component List
   const _renderItem = ({ item }) => {
    return (
      <ListItem bottomDivider >
        <Image source={{uri: `${item}`}} 
         style = {{ width: 300, height: 300, alignItems:"center", justifyContent:"center"}} />
      </ListItem>
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={style.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={style.container}>
        {/* Render Component List */}
        <Text style={{ fontSize: 18, marginTop:10, marginLeft:10, marginRight:10, marginBottom:10}}>
            List All Sub-Breeds of Hound Image
        </Text>  
        <FlatList
          data={dataPic}
          renderItem={_renderItem}
          refreshing={isLoading}
          keyExtractor={(item) => item}
          onRefresh={getPicData}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
    </View>
  );
};

export default Pic;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  }
});