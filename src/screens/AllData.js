import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from 'native-base';

// Import Axios
import axios from "axios";

const AllData = () => {
  //Init State
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.clear();
  console.log(data, "list dog")

  // Create LifeCycle
  useEffect(() => {
    getAllData();
  }, []);

  // Create Function to fetch
  const getAllData = () => {
    setIsLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        for (var result in res.data.message) {
          data.push(result + "," + " ")
          setData([...data]);
          setIsLoading(false);
        }
      })
      .catch(() => {
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  return (
    <ScrollView >
    <View style={style.container}>
       {/* Render Component List */}
       <Text style={{ fontSize: 18, marginTop:10, marginLeft:10, marginRight:10, marginBottom:10}}>
         List All Breeds :
       </Text>
       <Text style={{ fontSize: 18, marginTop:10, marginLeft:10, marginRight:10}}>
           {data}
       </Text>
    </View>
    </ScrollView >
  );
};

export default AllData;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:15
  },
});