import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { useFonts, Economica_700Bold } from '@expo-google-fonts/economica';

const screenHeight = Dimensions.get('screen').height

const Header = ({ setIsList, patchIdea, setNewTitle, setNewDesc, setNewIndex }) => {
    let [fontsLoaded] = useFonts({
      Economica_700Bold,
    })

    const finishUpdateIdeaTransition = () => {
      setIsList(true)
      patchIdea()
      setNewTitle('')
      setNewDesc('')
      setNewIndex(0)
    }
    
    if (!fontsLoaded) {
      return <View>
        <Text>Loading...</Text>
      </View>
    } else {
      return (
          <View style={styles.container}>
            <Pressable
              onPress={finishUpdateIdeaTransition}
            >
              <Text style={styles.title}>ideas</Text>
            </Pressable>
          </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.12,
    backgroundColor: '#EB3441',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
   fontSize: 36,
   fontFamily: 'Economica_700Bold',
   margin: 15,
   color: '#5C1418',
  }
});

export default Header;