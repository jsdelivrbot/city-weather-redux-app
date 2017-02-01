// - Need to decide if search bar should be a component or container. 
// - The search bar needs to have the ability to modify the state of the application
// by dispatching actions and needs to be able to call an action creator. Need to be able to
// know that someone has entered a search term, so that the app can make an API request.
// - Therefore, the search bar definitely need to be able to talk to redux, which means 
// the search bar should be a container.  

import React, { Component } from 'react';


export default class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
