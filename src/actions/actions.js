import { firebaseDb, firebaseData } from '../common/firebase';

export const beginFetchTagList = () => {
  return {
    type: 'beginFetchTagList',
    payload: { isFetchingTodoList: true }
  };
};

export const finishFetchTagList = error => {
  return {
    type: 'finishFetchTagList',
    payload: { isFetchingTodoList: false, error }
  };
};

export const getTags = tags => {
  return { type: 'GET_TAGS', tags };
};

export const beginEdit = () => {
  return {
    type: 'BEGIN_EDIT'
  };
};

export const endWithSaveEdit = () => {
  return {
    type: 'END_WITH_SAVE_EDIT'
  };
};
export const endWithCancelEdit = () => {
  return {
    type: 'END_WITH_CANCEL_EDIT'
  };
};

export const addTag = tag => {
  return {
    type: 'ADD_TAG',
    tag
    // tag: { value: 'Japanese', id: 3 }
  };
};

export const deleteTag = id => {
  return {
    type: 'DELETE_TAG',
    id
  };
};

export const editTag = (id, value) => {
  return {
    type: 'EDIT_TAG',
    id,
    value
  };
};

// export const beginFetchTodoList = () => {
// 	return {
// 		type: 'beginFetchTodoList',
// 		payload: { isFetchingTodoList: true }
// 	};
// };

export const updateToFirebase = (target, content) => {
  firebaseDb.ref(target).set(content);
};
// export const updateToFirebase = tags => {
//   firebaseDb.ref('tags').set(tags);
// };

// 1. 開始呼叫後端資料API
export const fetchTagsFromFirebase = () => {
  // 回傳函式，使redux-thunk middleware可以處理
  return dispatch => {
    // 1-1 通知使用者應用程式正在擷取後端資料，呈現載入中狀態
    // 這邊直接呼叫寫好的同步action creator建立action
    // 非同步Action從這邊開始逐一拆解成同步Action

    // isLoading = true
    // dispatch(beginFetchTagList());

    // 1-2 驗證參數
    // if (!page) page = 1;

    // 1-3 組裝呼叫後端資料API所需參數呼叫，fetch函式抓取後端資料
    firebaseDb
      .ref('tags')
      .once('value')
      // 2. 收到後端資料API結果
      .then(response => {
        console.log('response.val():', response.val());
        if (response.val()) {
          Object.keys(response.val()).forEach(function(key) {
            console.log(key, response.val()[key]);
            firebaseData.tags.push(response.val()[key]);
          });
          console.log('response_firebaseData.tags:', firebaseData.tags);
          dispatch(getTags(firebaseData.tags));
        }
      })
      .catch(error => {
        console.log('error', error);
        // 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
      });
  };
};
