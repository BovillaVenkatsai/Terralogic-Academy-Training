import{createStore,combineReducers} from "redux";    
import counterReducer from "./counterReducer";
const rootReducer=combineReducers({
    counter:counterReducer,
});

const store=createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSIONS_&& window._REDUX_DEVTOOLS_EXTENSIONS_()
);
export default store;