const initialState = {
  tags: [{ value: 'English', id: 1 }, { value: 'Chinese', id: 2 }]
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TAG':
      for (let i = 0; i < state.tags.length; i++) {
        if (state.tags[i].value === action.tag.value) {
          console.log('已有重複標籤');
          return state;
        }
      }
      return { tags: [...state.tags, action.tag] };
    case 'DELETE_TAG':
      if (state.tags.length) {
        const tmp = state.tags.slice();
        for (let i = 0; i < state.tags.length; i++) {
          if (action.id === state.tags[i].id) {
            tmp.splice(i, 1);
            return {
              tags: [...tmp]
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
          return { tags: [...tmp] };
        }
      }
      return state;
    default:
      return state;
  }
};

export default tagReducer;
