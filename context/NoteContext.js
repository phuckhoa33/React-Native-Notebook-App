import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/note/noteReducer";
import { actions, defaultState } from "../reducer/note/actions";
import { db } from "../components/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
const NoteContext = createContext();
const TASK = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
export const NoteProvider = ({children}) => {
    const [notes, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        // getData("user");
        dispatch({
            type: actions.getAllNotes,
            payload: TASK
        });
    }, []);


    const addData = async (collectionName, data) => {
        dispatch({
            type: actions.addNewNote,
            payload: data
        })
        try {
            const docRef = await addDoc(collection(db, collectionName), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };


    const getData = async (collectionName) => {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return data;
    };

    // Update operation
    const updateData = async (collectionName, docId, newData) => {
        try {
            await updateDoc(doc(db, collectionName, docId), newData);
            console.log("Document successfully updated!");
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    };

    // Delete operation
    const deleteData = async (collectionName, docId) => {
        try {
            await deleteDoc(doc(db, collectionName, docId));
            console.log("Document successfully deleted!");
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

    return ( 
        <NoteContext.Provider
            value={{
                addData,
                getData,
                updateData,
                deleteData,
                notes
            }}
        >
            {children}
        </NoteContext.Provider>
    )
}

export const useNoteContext = () => useContext(NoteContext);