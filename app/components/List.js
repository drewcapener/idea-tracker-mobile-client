import { StyleSheet, Text, View, ScrollView, Dimensions, TextInput, Button, Pressable} from 'react-native';
import { useFonts, OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import { useState } from 'react';

const screenHeight = Dimensions.get('screen').height

const List = ({ isList, setIsList, newTitle, setNewTitle, 
    newDesc, setNewDesc, newIndex, setNewIndex, postIdea, deleteIdea }) => {
    const placeHolderList = [
        [1, 'some title', 'some description'],
        [2, 'some title', 'some description'],
        [3, 'some title', 'some description'],
        [4, 'some title', 'some description'],
        [5, 'some title', 'some description'],
        [6, 'some title', 'some description'],
        [7, 'some title', 'some description'],
        [8, 'some title', 'some description'],
        [9, 'some title', 'some description'],
        [10, 'some title', 'some description'],
        [11, 'some title', 'some description'],
        [12, 'some title', 'some description'],
        [13, 'some title', 'some description'],
        [14, 'some title', 'some description'],
        [15, 'some title', 'some description'],
        [16, 'some title', 'some description'],
        [17, 'some title', 'some description'],
    ]

    const [list, setList] = useState(placeHolderList)

    let [fontsLoaded] = useFonts({
        OpenSans_700Bold,
    })

    const newIdeaTransition = () => {
        setIsList(false) 
        setNewIndex(list[list.length - 1][0] + 1)
        postIdea()
    }

    const deleteIdeaTransition = () => {
        setIsList(true) 
        deleteIdea() 
        setNewTitle('')
        setNewDesc('')
        setNewIndex(0)
    }

    const editIdeaTransition = (index, title, desc) => {
        setIsList(false)
        setNewIndex(index)
        setNewTitle(title)
        setNewDesc(desc)
    }

    if (!fontsLoaded) {
        return <View>
          <Text>Loading...</Text>
        </View>
    } else {
        return (
            <View style={styles.container}>
                {isList ? 
                    <>
                        <ScrollView style={styles.scrollContainer}>
                            {list.map(item => 
                                <Pressable 
                                    key={item[0]}
                                    onPress={() => 
                                        editIdeaTransition(item[0], item[1], item[2])
                                    }>
                                    <View style={styles.item}>
                                        <Text style={styles.title}>{item[1]}</Text>
                                    </View>
                                </Pressable>
                            )}
                        </ScrollView>
                        <View style={styles.footer}>
                            <View style={styles.itemInput}>
                                <TextInput 
                                    style={styles.titleInput}
                                    value={newTitle}
                                    onChangeText={setNewTitle}
                                    placeholder={'new idea'}
                                />
                                <Pressable 
                                    style={styles.button}
                                    onPress={newIdeaTransition}
                                >
                                    <Text 
                                        style={styles.buttonText}
                                    >+</Text>
                                </Pressable>
                            </View>
                        </View>
                    </>
                : <>
                    <View style={styles.newItem}>
                        <TextInput 
                            style={styles.newTitleInput}
                            onChangeText={setNewTitle}
                            value={newTitle}
                            placeholder={'title'}
                        />
                        <TextInput 
                            style={styles.newDescInput}
                            onChangeText={setNewDesc}
                            value={newDesc}
                            multiline={true}
                            numberOfLines={20}
                            placeholder={'description'}
                        />
                        <Pressable 
                            style={styles.deleteButton}
                            onPress={deleteIdeaTransition}
                        >
                            <Text 
                                style={styles.buttonText}
                            >-</Text>
                        </Pressable>
                    </View>
                </>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  scrollContainer: {
      height: screenHeight * 0.745,
      width: '98%',
  },
  item: {
    width: '100%',
    backgroundColor: '#FCFCFC',
    borderWidth: 4,
    borderColor: '#3D52EB',
    marginTop: 5,
  },
  title: {
    margin: 10,
    fontFamily: 'OpenSans_700Bold',
    letterSpacing: 2, 
  },
  footer: {
    width: '98%',
  },
  itemInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FCFCFC',
    borderWidth: 4,
    borderColor: '#3D52EB',
    marginTop: 5,
  },
  titleInput: {
    width: '70%',
    margin: 10,
    fontFamily: 'OpenSans_700Bold',
    letterSpacing: 2, 
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '10%',
  },
  buttonText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 30, 
    color: '#3D52EB',
  },
  newItem: {
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FCFCFC',
    borderWidth: 4,
    borderColor: '#3D52EB',
    marginTop: 5,
  },
  newTitleInput: {
    width: '90%',
    margin: 10,
    fontFamily: 'OpenSans_700Bold',
    letterSpacing: 2, 
    fontSize: 20,
  },
  newDescInput: {
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontFamily: 'OpenSans_700Bold',
    letterSpacing: 2, 
  },
  deleteButton: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      width: '10%',
  },
});

export default List;