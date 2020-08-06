import {combineReducers, createStore} from "redux";
import {headerReducer} from "./headerReducer";
import {professionReducer} from "./professionReducer";
import {statsReducer} from "./statsReducer";
import {traitsReducer} from "./traitsReducer";
import {skillsReducer} from "./skillsReducer";
import {descriptionReducer} from "./descriptionReducer";

let reducers = combineReducers({
  header: headerReducer,
  profession: professionReducer,
  stats: statsReducer,
  traits: traitsReducer,
  skills: skillsReducer,
  description: descriptionReducer
});

let store = createStore(reducers);

window.store = store;

export default store;