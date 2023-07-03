import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
// @ts-ignore
import {DotsLoader} from 'react-native-indicator';
import Bubble from './components/Bubble';
import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

function App(): JSX.Element {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{user: string; text: string}[]>([
    {user: 'me', text: '넌 뭐하는 지피티야?'},
    {user: 'chat', text: '난 똥 잘싸는 법을 알려주는 지피티야'},
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const onSend = async () => {
    setMessages([...messages, {user: 'me', text: input}]);
  };

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    } else if (input.length > 0) {
      setIsLoading(true);
      requestData(input);
      setInput('');
    }
  }, [messages]);

  const requestData = async (text: string) => {
    try {
      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 1000,
      });

      setMessages([
        ...messages,
        {
          user: 'gpt',
          text: completion.data.choices[0].text?.replace(/\n/g, '') || '',
        },
      ]);
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.chatbox} ref={scrollViewRef}>
        {messages.map(({user, text}, index) => {
          return <Bubble key={index} text={text} isMine={user === 'me'} />;
        })}
        {isLoading && <DotsLoader size={10} color="#68798c" betweenSpace={5} />}
      </ScrollView>
      <View style={styles.rowbox}>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={text => setInput(text)}
          placeholder="메세지 입력..."
        />
        <Button title="전송" color="#1e1e1e" onPress={onSend} />
      </View>
      {/* {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatbox: {
    flex: 1,
    backgroundColor: '#aebfd1',
    padding: 10,
  },
  rowbox: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

export default App;
