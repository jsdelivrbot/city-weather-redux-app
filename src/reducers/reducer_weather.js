export default function(state = null, action) {
    // Redux promise sees the incoming action (gatekeeper). It looks at specifically the payload property.
    // If the payload is a promise, redux promise stops the action entirely. Then, once the request finishes,
    // it dispatches a new action of the same type but with a payload of the resolved request. 
    // * (it unwraps the promise for us) 
    console.log('Action recieved: ', action);

    // The middleware stops the promise and it stops the action in its tracks until the promise 
    // is resolved, and then it goes off and does its thing. 

    return state;
}