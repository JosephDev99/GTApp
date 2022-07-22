import { Dimensions, Image, Pressable, StyleSheet, View, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Asset } from 'expo-asset';
import { AntDesign } from '@expo/vector-icons';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View>
        <Pressable style={styles.closeIcon} onPress={() => props.navigation.closeDrawer()}>
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.profileContainer}>
        <Image source={Asset.fromModule(require('../assets/avatar.png')).uri} style={styles.avatarImg}></Image>
        <Text style={styles.avatarName}>Nata Vacheishvili</Text>
        <Text>rata vacheishvili@gurucar.com</Text>
      </View>
      <View style={styles.listContainer}>
        <View>
          <DrawerItemList {...props} />
        </View>
        <Pressable style={styles.logOutContainer}>
          <AntDesign name="logout" size={24} color="black" style={styles.logOutIcon} onPress={() => {
            localStorage.removeItem('authToken');
            props.navigation.navigate('SignIn');
          }} />
          <Text>Log out</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    paddingTop: 0,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  closeIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 5,
    paddingRight: 10,
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 15,
  },
  avatarName: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  listContainer: {
    backgroundColor: 'lightgrey',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  logOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 10,
  },
  logOutIcon: {
    paddingEnd: 15,
  },
});

export default CustomDrawerContent;
