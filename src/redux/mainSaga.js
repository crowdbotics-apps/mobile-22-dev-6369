import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView86322Saga from '../features/CalendarView86322/redux/sagas';
import CalendarView6321Saga from '../features/CalendarView6321/redux/sagas';
import EmailAuth6319Saga from '../features/EmailAuth6319/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView86322Saga,
CalendarView6321Saga,
EmailAuth6319Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}