import React, { Component} from 'react';
import Navigator from './navigation/Drawer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './shared/Reducer';

const store = createStore(RootReducer);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;