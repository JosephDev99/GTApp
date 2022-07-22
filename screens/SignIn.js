import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import CustomInput from '../components/CustomInput';

export default function SignInScreen({ navigation }) {
  const signInValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^($|[^0])(\d){9}\b/, 'Phone number should be 10 number and start since 1')
      .required('Phone number is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const handleSubmit = (data) => {
    console.log(data);
    // axios.post('http://localhost:3000/auth/signin', data)
    //   .then(res => localStorage.setItem("access_token", res.data.accessToken))
    //   .catch((err) => {
    //     throw new Error(err.response.body.message);
    //   });
    localStorage.setItem("access_token", 'yellow_splash');
    navigation.navigate('Home');
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.25, y: 1.1 }}
      locations={[0.2, 1]}
      colors={['white', 'white']}
      style={styles.linearGradient}>
      <View flex>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        </View>
        <View flex>
          <Formik
            initialValues={{
              phoneNumber: '',
              password: '',
            }}
            onSubmit={values => handleSubmit(values)}
            validationSchema={signInValidationSchema}
          >
            {({ handleSubmit, isValid }) => (
              <View center>
                <View row width={300}>
                  <View flex={15}>
                    <Field
                      component={CustomInput}
                      name="phoneNumber"
                      placeholder="Phone Number"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View width={300}>
                  <View flex={15}>
                    <Field
                      component={CustomInput}
                      name="password"
                      placeholder="Password"
                      secureTextEntry
                    />
                  </View>
                </View>
                <View width={300} style={styles.mt20}>
                  <TouchableOpacity style={styles.bgWarning} disabled={!isValid} onPress={handleSubmit}>
                    <Text style={styles.signInTxt}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View >
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  logoImg: {
    width: 100,
    height: 120,
    resizeMode: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  bgWarning: {
    backgroundColor: 'yellow',
  },
  signInTxt: {
    textAlign: 'center',
    paddingVertical: 10,
  },
});
