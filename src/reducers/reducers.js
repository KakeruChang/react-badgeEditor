import { updateToFirebase } from '../actions/actions';
import { initialState } from '../state/initial';

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TAGS':
      return {
        data: { tags: action.tags },
        tmpData: {
          tags: []
        },
        isReadOnly: state.isReadOnly
      };
    // return { tags: [...state.tags, ...action.tags] };
    case 'BEGIN_EDIT':
      const tmpBeginEdit = [];
      state.data.tags.forEach((tag, i) => {
        tmpBeginEdit.push({ id: tag.id, value: tag.value });
      });
      return {
        data: { tags: state.data.tags },
        tmpData: { tags: tmpBeginEdit },
        isReadOnly: false
      };
    case 'END_WITH_SAVE_EDIT':
      updateToFirebase('tags', [...state.tmpData.tags]);
      return {
        data: { tags: state.tmpData.tags },
        tmpData: {
          tags: []
        },
        isReadOnly: true
      };
    case 'END_WITH_CANCEL_EDIT':
      return {
        data: { tags: state.data.tags },
        tmpData: {
          tags: []
        },
        isReadOnly: true
      };
    case 'ADD_TAG':
      for (let i = 0; i < state.tmpData.tags.length; i++) {
        if (state.tmpData.tags[i].value === action.tag.value) {
          console.log('已有重複標籤');
          return state;
        }
      }
      const result = [...state.tmpData.tags, action.tag];
      return {
        data: { tags: state.data.tags },
        tmpData: { tags: result },
        isReadOnly: state.isReadOnly
      };
    case 'DELETE_TAG':
      //if (state.tags.length) {
      const tmpDeleteTag = state.tmpData.tags.slice();
      for (let i = 0; i < state.tmpData.tags.length; i++) {
        if (action.id === state.tmpData.tags[i].id) {
          tmpDeleteTag.splice(i, 1);
          const result = tmpDeleteTag;
          return {
            data: { tags: state.data.tags },
            tmpData: { tags: result },
            isReadOnly: state.isReadOnly
          };
        }
      }
      //}
      return state;
    case 'EDIT_TAG':
      const tmpEditTag = state.tmpData.tags.slice();
      for (let i = 0; i < state.tmpData.tags.length; i++) {
        if (action.id === tmpEditTag[i].id) {
          tmpEditTag[i].value = action.value;
          const result = tmpEditTag;
          return {
            data: { tags: state.data.tags },
            tmpData: { tags: result },
            isReadOnly: state.isReadOnly
          };
        }
      }
      return state;
    default:
      return state;
  }
};

export default tagReducer;
