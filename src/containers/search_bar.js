// - Need to decide if search bar should be a component or container. 
// - The search bar needs to have the ability to modify the state of the application
// by dispatching actions and needs to be able to call an action creator. Need to be able to
// know that someone has entered a search term, so that the app can make an API request.
// - Therefore, the search bar definitely need to be able to talk to redux, which means 
// the search bar should be a container.  

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };

        // take the existing function, bind it to "this" (instance of search bar), and replace the existing function with it. 
        // If ever passing a callback around as a function like this and that callback has a reference to "this,
        // you need to bind with the context. 
        this.onInputChange = this.onInputChange.bind(this);
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // all DOM event handlers (ie onChange, onClick, onHover, etc.) all come along with the event object.
    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    // prevent the browser from trying to submit the form at all.
    onFormSubmit(event) {
        event.preventDefault(); // tell the browser not to submit the form

        // Need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
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


function mapDispatchToProps(dispatch) {
    // makes sure the action flows down into the middleware and then the reducers inside our redux app
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Previously we've had components or containers where we map dispatch to props and map state to props as well.
// Reason that null is being passed here is that whenever we are passing in a function that is supposed to map
// our dispatch to the props of our container, it always goies in as the second argument. Don't need state here.
export default connect(null, mapDispatchToProps)(SearchBar);