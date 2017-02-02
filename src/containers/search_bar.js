// - Need to decide if search bar should be a component or container. 
// - The search bar needs to have the ability to modify the state of the application
// by dispatching actions and needs to be able to call an action creator. Need to be able to
// know that someone has entered a search term, so that the app can make an API request.
// - Therefore, the search bar definitely need to be able to talk to redux, which means 
// the search bar should be a container.  

import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };

        // take the existing function, bind it to "this" (instance of search bar), and replace the existing function with it. 
        // If ever passing a callback around as a function like this and that callback has a reference to "this,
        // you need to bind with the context. 
        this.onInputChange = this.onInputChange.bind(this);
    }

    // all DOM event handlers (ie onChange, onClick, onHover, etc.) all come along with the event object.
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

    render() {
        return (
            <form className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
