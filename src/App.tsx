import React from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native"; //view=div - Text=p
import Card from "./components/card";
/*npm start */
function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Card 
        title="Jhon Doe" 
        text="Lorem ipsum dolor sit amet."/>
      <Card 
        title="Natalie Tree" 
        text="Lorem ipsum dolor sit amet."/>
      <Card 
        title="Chris True" 
        text="Lorem ipsum dolor sit amet."/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
})

export default App;
