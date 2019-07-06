import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { renderRoutes } from 'react-router-config';
import routes from './router/routes';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tagReducer from './reducers/reducers';
import { Provider } from 'react-redux';
import { fetchTagsFromFirebase } from './actions/actions';

// establish initial state
// const initTodoState = {
//   tags: []
// };

// establish Store
const store = createStore(
  tagReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
  // 啟動時從Firebase載入待辦事項
  componentDidMount() {
    store.dispatch(fetchTagsFromFirebase());
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <Title />
          <Tags />
          <InputGroup /> */}
          <Navbar />
          {/* <Route path='/' exact component={Introduction} />
          <Route path='/about' component={About} /> */}
          <div className='container'>{renderRoutes(routes)}</div>

          {/* {routes.map((route, i) => {
            const { path, exact, routes } = route;
            return (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={routeProps => (
                  <route.component routes={routes} {...routeProps} />
                )}
              />
            );
          })} */}
          {/* <Introduction />
          <About /> */}
        </div>
      </Provider>
    );
  }
}
