import React, { Component } from 'react';
import Title from './components/Title';
import Tags from './components/Tags';
import InputGroup from './components/InputGroup';
import { createStore } from 'redux';
import tagReducer from './reducers/reducers';
import { Provider } from 'react-redux';

let store = createStore(
  tagReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  // constructor() {
  //   super();
  //   // 要使用this就要super();
  //   let content = [{ value: 'English', id: 1 }, { value: 'Chinese', id: 2 }];
  //   this.state = {
  //     tags: content
  //   };
  // }

  // addTag(input) {
  //   for (let i = 0; i < this.state.tags.length; i++) {
  //     if (this.state.tags[i].value === input.value) {
  //       console.log('已有重複標籤');
  //       return;
  //     }
  //   }
  //   this.setState({
  //     tags: [...this.state.tags, input]
  //   });
  // }
  // deleteTag(id) {
  //   if (this.state.tags.length) {
  //     const tmp = this.state.tags.slice();
  //     for (let i = 0; i < this.state.tags.length; i++) {
  //       if (id === this.state.tags[i].id) {
  //         tmp.splice(i, 1);
  //         this.setState({
  //           tags: [...tmp]
  //         });
  //         return;
  //       }
  //     }
  //   }
  // }
  // editTag(id, value) {
  //   const tmp = this.state.tags.slice();
  //   for (let i = 0; i < this.state.tags.length; i++) {
  //     if (id === tmp[i].id) {
  //       tmp[i].value = value;
  //       this.setState({
  //         tags: [...tmp]
  //       });
  //       return;
  //     }
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Title />
          <Tags />
          <InputGroup />
          {/* <Title length={this.state.tags.length} />
          <Tags
            tags={this.state.tags}
            deleteTag={id => {
              this.deleteTag(id);
            }}
            editTag={(id, value) => {
              this.editTag(id, value);
            }}
          />
          <InputGroup
            addTag={input => {
              this.addTag(input);
            }}
          /> */}
          {/* 以箭頭函式將this指向函式宣告的物件 */}
        </div>
      </Provider>
    );
  }
}
