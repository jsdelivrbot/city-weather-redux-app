import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // Redux promise sees the incoming action (gatekeeper). It looks at specifically the payload property.
    // If the payload is a promise, redux promise stops the action entirely. Then, once the request finishes,
    // it dispatches a new action of the same type but with a payload of the resolved request. 
    // * (it unwraps the promise for us) 
    //console.log('Action recieved: ', action);

    // The middleware stops the promise and it stops the action in its tracks until the promise 
    // is resolved, and then it goes off and does its thing. 

    switch (action.type) {
        case FETCH_WEATHER:
            // or state.concat([action.payload.data]) (swap position of action.payload.data and state to get data first)
            return [ action.payload.data, ...state];

            // ES6 syntax:
            //[ action.payload.data, ...state]
            // make a new array, put action data inside it
            // then take this other variable, which because of the three dots, says this might be an array,
            // so take all the entries inside of it and insert it into this new outside array. (like flaten it out)
            // like : [city, city, city]. 
    }

    return state;
}