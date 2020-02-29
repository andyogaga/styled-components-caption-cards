import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "./reducers/index.reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "alphapay_ashboard_2019_@)!(",
  storage,
  blacklist: ["feedbacks", "users"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger]
}

// export default function configureStore(initialState = {}) {
//   let store = createStore(
//     persistedReducer,
//     initialState,
//     applyMiddleware(...middlewares)
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// }


const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
const persistor = persistStore(store);
export default { store, persistor };
