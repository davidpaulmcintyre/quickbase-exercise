import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware
  ];

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middewares)),
    devToolsEnhancer() // add support for Redux dev tools
  );
}
