import { updateToFirebase } from '../actions/actions';
import { initialState } from '../components/state/initial';

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TAGS':
      return { tags: [...action.tags], isReadOnly: state.isReadOnly };
    // return { tags: [...state.tags, ...action.tags] };
    case 'BEGIN_EDIT':
      return {
        tags: [...state.tags],
        tmpTags: [...state.tags],
        isReadOnly: false
      };
    case 'END_WITH_SAVE_EDIT':
      console.log('END_WITH_SAVE_EDIT');
      updateToFirebase('tags', [...state.tags]);
      return { tags: [...state.tmpTags], isReadOnly: true };
    case 'END_WITH_CANCEL_EDIT':
      console.log('END_WITH_CANCEL_EDIT');
      return { tags: [...state.tags], isReadOnly: true };
    case 'ADD_TAG':
      for (let i = 0; i < state.tags.length; i++) {
        if (state.tags[i].value === action.tag.value) {
          console.log('已有重複標籤');
          return state;
        }
      }
      const result = [...state.tags, action.tag];
      // updateToFirebase('tags', result);
      return {
        tags: result,
        tmpTags: [...state.tags],
        isReadOnly: state.isReadOnly
      };
    case 'DELETE_TAG':
      if (state.tags.length) {
        const tmp = state.tags.slice();
        for (let i = 0; i < state.tags.length; i++) {
          if (action.id === state.tags[i].id) {
            tmp.splice(i, 1);
            const result = [...tmp];
            // updateToFirebase('tags', result);
            return {
              tags: result,
              isReadOnly: state.isReadOnly
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
          return { tags: result, isReadOnly: state.isReadOnly };
        }
      }
      return state;
    default:
      return state;
  }
};

export default tagReducer;
