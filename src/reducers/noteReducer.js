const initState = {}

const noteReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_NOTE_ERROR':
      console.log('Create note error');
      return state;

    case 'CREATE_NOTE_SUCCESS':
      console.log('Create note success');
      return state;

    case 'GET_NOTE_ERROR':
      console.log('Get note error');
      return state;

    case 'GET_NOTE_SUCCESS':
      console.log('Get note success');
      return state;

    default:
      return state
  }
}

export default noteReducer;