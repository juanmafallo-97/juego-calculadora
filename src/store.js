import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import { preventRepeatedOperation } from './middleware';

const middleware = applyMiddleware(preventRepeatedOperation);

const enhancers = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancers);

export default store;
