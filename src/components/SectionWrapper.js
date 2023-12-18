import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SectionWrapper = ({title, children}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // A clean white background
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow for depth
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android
    padding: 20, // Internal spacing
    marginVertical: 10, // Vertical spacing outside the component
    marginHorizontal: 20, // Horizontal spacing outside the component
  },
  title: {
    fontSize: 18, // Font size for the title
    fontWeight: 'bold', // Making the title bold
    marginBottom: 10, // Space between title and content
    color: '#333333', // Dark color for the text for readability
  },
  contentContainer: {
    // Additional styles for the content container can be added here
  },
});

export default SectionWrapper;
