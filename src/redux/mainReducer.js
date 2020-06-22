import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6321Reducer from '../features/CalendarView6321/redux/reducers';
import EmailAuth6319Reducer from '../features/EmailAuth6319/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6321: CalendarView6321Reducer,
EmailAuth6319: EmailAuth6319Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});