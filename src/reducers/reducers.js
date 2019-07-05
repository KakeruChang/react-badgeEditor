import { updateToFirebase } from '../actions/actions';

const initialState = {
  tags: []
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TAGS':
      return { tags: [...action.tags] };
    // return { tags: [...state.tags, ...action.tags] };
    case 'ADD_TAG':
      for (let i = 0; i < state.tags.length; i++) {
        if (state.tags[i].value === action.tag.value) {
          console.log('已有重複標籤');
          return state;
        }
      }
      const result = [...state.tags, action.tag];
      updateToFirebase(result);
      return { tags: result };
    case 'DELETE_TAG':
      if (state.tags.length) {
        const tmp = state.tags.slice();
        for (let i = 0; i < state.tags.length; i++) {
          if (action.id === state.tags[i].id) {
            tmp.splice(i, 1);
            const result = [...tmp];
            updateToFirebase(result);
            return {
              tags: result
            };
          }
        }
      }
      return state;
    case 'EDIT_TAG':
      const tmp = state.tags.slice();
      for (let i = 0; i < state.tags.length; i++) {
        if (action.id === tmp[i].id) {
          tmp[i].value = action.value;
          const result = [...tmp];
          updateToFirebase(result);
          return { tags: result };
        }
      }
      return state;
    default:
      return state;
  }
};

export default tagReducer;
