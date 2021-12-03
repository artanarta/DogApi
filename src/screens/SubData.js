import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from 'native-base';

// Import Axios
import axios from "axios";

const SubData = () => {
  //Init State
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.clear();
  console.log(data, "list dog")

  // Create LifeCycle
  useEffect(() => {
    //Function Exception
    getSubData();
  }, []);

  // Create Function to fetch
  const getSubData = () => {
    setIsLoading(true);
    axios
    .get("https://dog.ceo/api/breed/hound/list")
      .then((res) => {
        setData(res.data.message +".");
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error Fetch Data");
        setIsLoading(false);
      });
  };

  return (
    <ScrollView >
    <View style={style.container}>
       <Text style={{ fontSize: 18, marginTop:10, marginLeft:10, marginRight:10, marginBottom:10}}>
          List All Sub-Breeds of Hound :
       </Text>
       <Text style={{ fontSize: 18, marginTop:10, marginLeft:10, marginRight:30}}>
            {data}
       </Text>
    </View>
    </ScrollView >
  );
};

export default SubData;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
  },
});