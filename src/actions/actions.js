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
