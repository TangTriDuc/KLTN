import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image} from 'react-native';

const WeatherAbout = () => {
 
  const [studentInfo] = useState({
    name: 'Tri Duc',
    role: 'Developer and UI/UX special',
    contribution: 'Contributed to fix UI design and make data fetching and some function specials in app',
  });
 
  const [studentInfo1] = useState({
    name1: 'Vang Bang',
    role1: 'UI/UX',
    contribution1: 'Contributed to UI design and make some function basic in app',
  });

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        blurRadius={70}
        source={require('../assets/images/bg3.jpg')}
        style={{position: 'absolute', height: '100%', width: '100%'}}
      />
      <Text style={styles.title}>Student Information</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{studentInfo.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{studentInfo.role}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Contribution:</Text>
        <Text style={styles.value}>{studentInfo.contribution}</Text>
      </View>

      {/* Bang */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{studentInfo1.name1}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{studentInfo1.role1}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Contribution:</Text>
        <Text style={styles.value}>{studentInfo1.contribution1}</Text>
      </View>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  title: {
    width: wp(150),
    marginHorizontal: wp(20),
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginTop: hp(5),
    marginBottom: 25,
  },
  infoContainer: {
    flex: 1,
    width: wp(250),
    marginHorizontal: wp(2),
    marginBottom: hp(5),
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 5,
    marginTop: 4
  },
  value: {
    width: wp(100),
    fontSize: 16,
    fontWeight: '500',
    lineHeight: hp(4),
    color: '#000',
    // marginVertical: 4.5,
  },
});

export default WeatherAbout;
