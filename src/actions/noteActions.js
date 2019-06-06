import { 
  CREATE_NOTE_SUCCESS, 
  CREATE_NOTE_ERROR, 
  GET_NOTE_SUCCESS, 
  GET_NOTE_ERROR 
} from '@/constants'

export const createNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('notes').add({
      date: note.date,
      hours: note.hours
    }).then(() => {
      dispatch({ type: CREATE_NOTE_SUCCESS });
    }).catch(err => {
      dispatch({ type: CREATE_NOTE_ERROR }, err);
    });
  }
};

export const getNotes = () => {
  return (dispatch, getState, { getFirestore }) => {
    getFirestore().collection('notes').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    }).then(() => {
      dispatch({ type: GET_NOTE_SUCCESS });
    }).catch(err => {
      dispatch({ type: GET_NOTE_ERROR }, err);
    });;
  }
}