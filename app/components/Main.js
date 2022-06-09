import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './Header';
import List from './List';

const Main = () => {
    const [isList, setIsList] = useState(true)
    const [newIndex, setNewIndex] = useState(0)
    const [newTitle, setNewTitle] = useState('')
    const [newDesc, setNewDesc] = useState('')

    const postIdea = () => {
        console.log('Post: ', [ newTitle, newDesc ])
    }

    const patchIdea = () => {
        console.log('Patch: ', newIndex, [ newTitle, newDesc ])
    }

    const deleteIdea = () => {
        console.log('Delete: ', newIndex)
    }

    return (
        <View style={styles.container}>
            <Header
              setIsList={setIsList}
              patchIdea={patchIdea}
              setNewIndex={setNewIndex}
              setNewTitle={setNewTitle}
              setNewDesc={setNewDesc}
            />
            <List
              isList={isList} 
              setIsList={setIsList}
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newDesc={newDesc}
              setNewDesc={setNewDesc}
              newIndex={newIndex}
              setNewIndex={setNewIndex}
              postIdea={postIdea}
              deleteIdea={deleteIdea}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBBE26',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Main;