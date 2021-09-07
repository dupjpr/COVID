import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';

const initialState = {
  loading: true,
  data: '',
  dataChart: '',
  optionPick: { selectOne: 'All states', selectTwo: 'All time' },
  statesEEUU: {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    DC: 'Distrito de Columbia',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawái',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Luisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Míchigan',
    MN: 'Minnesota',
    MS: 'Misisipi',
    MO: 'Misuri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'Nuevo Hampshire',
    NJ: 'Nueva Jersey',
    NM: 'Nuevo México',
    NY: 'Estado de Nueva York',
    NC: 'Carolina del Norte',
    ND: 'Dakota del Norte',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregón',
    PA: 'Pensilvania',
    RI: 'Rhode Island',
    SC: 'Carolina del Sur',
    SD: 'Dakota del Sur',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Estado de Washington',
    WV: 'Virginia Occidental',
    WI: 'Wisconsin',
    WY: 'Wyoming'
  }

}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
