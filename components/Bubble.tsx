import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Bubble = ({text, isMine}: {text: string; isMine: boolean}) => {
  const bubbleStyle = isMine ? styles.myBubble : styles.otherBubble;
  const textStyle = isMine ? styles.myText : styles.otherText;

  return (
    <View style={[styles.bubbleContainer, bubbleStyle]}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 10,
    maxWidth: '70%',
  },
  myBubble: {
    backgroundColor: '#FFEB33',
    alignSelf: 'flex-end',
  },
  otherBubble: {
    backgroundColor: '#f5f5f5',
    alignSelf: 'flex-start',
  },
  myText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  otherText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Bubble;
