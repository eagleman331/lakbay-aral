import { View, Text, SafeAreaView, useWindowDimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../assets/constant/Colors';

const loginScreen = () => {
  const { width, height } = useWindowDimensions();

//   const auth = getAuth();
//   const SignInEmail = () => {

//     signInWithEmailAndPassword(auth, 'warren@gmail.com', 'password')
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   };

//   const handleLogin = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, 'warren@gmail.com', 'password');
//     console.log("User logged in!");
//   } catch (error) {
//     console.error("Error logging in:", error.message);
//   }
// };

  return (
    <View className="flex-1 " style={{ backgroundColor: Colors.soaringEagle }}>
      <SafeAreaView>
        <View className=" ml-5 mt-5 flex-row" style={{ height: height * 0.05 }}>
          <Text className="text-4xl font-bold text-neutral-50">Military</Text>
          <Text className="align-bottom text-2xl  text-neutral-50"> -Basics</Text>
        </View>
      </SafeAreaView>
      <TouchableOpacity onPress={() => handleLogin()}>
        <View
          style={{
            backgroundColor: Colors.turbo,
            height: 100,
            width: width * 0.8,
            marginLeft: 10,
            top: height * 0.5,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text>loginScreen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default loginScreen;
