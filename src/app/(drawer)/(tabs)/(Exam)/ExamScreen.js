import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../../../assets/constant/Colors';
import { Divider } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useLocalSearchParams, useRouter } from 'expo-router';
import firestore, {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from '@react-native-firebase/firestore';

const ExamScreen = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const params = useLocalSearchParams();
  const [faqsData, setFaqsData] = useState([]);
  const [numberingQuestion, setNumberingQuestion] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [questionCounting, setQuestionCounting] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreNgayun, setScoreNgayun] = useState(0);
  const [testData, setTestData] = useState([]);
  const [questioIterate, setQuestioIterate] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [answerTest, setAnswerTest] = useState([]);
  const [questionLenght, setQuestionLenght] = useState(0);
  const { className, id, questionNum, statusPay, indexCard } = params;

  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = Animated.modulo(Animated.divide(scrollX, width), width);
  const ref = useRef();
  const item = {
    id: '1',
    title: 'Welcome to the Exam',
    description: 'Prepare yourself for the upcoming challenges.',
  };
  const numQuestion = faqsData.length;

  function resultLipat() {
    router.push({
      pathname: '/(drawer)/(tabs)/(Exam)/ResultScreen',
      params: { score: scoreNgayun, questions: numQuestion },
    });
  }

  const PressNext = () => {
    setQuestionCounting(questionCounting + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numQuestion) {
      setCurrentQuestion(nextQuestion);
      const lastquestion = currentQuestion + 2;
      if (lastquestion == numQuestion) {
        setShowScore(true);
      }
    } else {
      setQuestionLenght(numQuestion);
      resultLipat();
    }
  };

  const NextQuestionPlease = (sample, item) => {
    setQuestionCounting(questionCounting + 1);
    const objQuestion = {
      id: questionCounting,
      question: item.question,
      answer: item.answer,
      choice2: item.choice2,
      choice3: item.choice3,
      choice4: item.choice4,
      pickAnswer: sample,
    };

    setAnswerTest([...answerTest, objQuestion]);
    if (sample === item.answer) {
      setScoreNgayun(scoreNgayun + 1);
      console.log('Answer', scoreNgayun);
    } else {
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numQuestion) {
      setCurrentQuestion(nextQuestion);
      const lastquestion = currentQuestion + 2;
      if (lastquestion == numQuestion) {
        setShowScore(true);
      }
    } else {
      setQuestionLenght(numQuestion);
      resultLipat();
    }
  };

  const skipQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numQuestion) {
      setCurrentQuestion(nextQuestion);
      const lastquestion = currentQuestion + 2;
      if (lastquestion == numQuestion) {
        setShowScore(true);
      }
    } else {
      setQuestionLenght(numQuestion);
      resultLipat();
    }
  };

  useEffect(() => {
    const postsRef = firestore().collection('ArmyExams').doc(id).collection(id); // <-- nested collection
    const unsubscribed = async () => {
      try {
        const snapshot = await postsRef.get();
        const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setFaqsData(posts);
        return posts;
      } catch (error) {
        console.error('Error fetching nested collection:', error);
      }
    };
    unsubscribed();
  }, []);
  return (
    <>
      <View className="flex-1 " style={{ backgroundColor: Colors.darkGreen }}>
        <SafeAreaView>
          <Animated.FlatList
            data={faqsData}
            ref={ref}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: true,
            })}
            keyExtractor={(item) => item.id}
            horizontal
            onMomentumScrollEnd={(ev) => {
              setCardIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
            }}
            renderItem={({ item, index }) => {
              var ChoiceOptions = [item.answer, item.choice2, item.choice3, item.choice4];
              function listRandomize(a, b) {
                return Math.random() - 0.5;
              }

              const choiceData = ChoiceOptions.sort(listRandomize);
              const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [50, 0, 20],
              });
              return (
                <View
                  className="mt-16"
                  key={index}
                  style={{ alignItems: 'center', width, marginTop: 30 }}>
                  <View
                    style={{
                      width: width * 0.9,
                      borderRadius: 5,
                      backgroundColor: Colors.light,
                    }}>
                    <View style={{ alignSelf: 'center' }}>
                      <Text>Exam # {parseInt(indexCard) + 1}</Text>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                      <Text>
                        Question: {currentQuestion + 1}/ {numQuestion}
                      </Text>
                    </View>
                    <View
                      style={{
                        paddingRight: 10,
                        paddingLeft: 10,
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      <Text style={{ textAlign: 'justify', flexDirection: 'row' }}>
                        <Text> </Text>
                        {/* {faqsData[0].question} */}
                        {item.question}
                      </Text>
                    </View>
                    <Divider color="black" />
                    <ScrollView style={{ marginTop: 15 }}>
                      {choiceData.map((sample, k) => {
                        return (
                          <TouchableOpacity
                            key={k}
                            onPress={() => {
                              ref?.current?.scrollToOffset({
                                offset: (index + 1) * width,
                                animated: true,
                              });
                              NextQuestionPlease(sample, item);
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                borderColor: Colors.darkGreen,
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 5,
                                marginLeft: 5,
                                marginRight: 5,
                                marginBottom: 10,
                              }}>
                              <View style={{ justifyContent: 'center' }}>
                                <Fontisto
                                  name="checkbox-passive"
                                  size={24}
                                  color={Colors.darkGreen}
                                />
                              </View>

                              <Text
                                style={{ marginLeft: 10, marginRight: 10, textAlign: 'justify' }}>
                                {sample}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        );
                      })}

                      <View
                        style={{
                          marginBottom: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}>
                        <TouchableOpacity onPress={() => skipQuestion()}>
                          <View
                            style={{
                              width: width * 0.3,
                              height: 50,
                              borderRadius: 5,
                              backgroundColor: Colors.turbo,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text className="text-lg font-bold">SKIP</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            router.push({
                              pathname: '/(drawer)/(tabs)/(Exam)/ResultScreen',
                              params: item,
                            })
                          }>
                          <View
                            style={{
                              width: width * 0.3,
                              height: 50,
                              borderRadius: 5,
                              backgroundColor: Colors.turbo,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text className="text-lg font-bold">END</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default ExamScreen;
