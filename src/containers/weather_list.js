import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     const weather = state.weather
//     return { weather: state.weather};
// }
// Same as ^^ 
function mapStateToProps({ weather }) {
    return { weather}; // same as => { weather: weather};
}

// connect component with the function mapStateToProps
// exporting the connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);