import React, { Component } from 'react';
import './app.css';
import HemisphereDisplay from './components/HemisphereDisplay';

class App extends Component {
    //? STATE
    state = { latitude: null, errorMessage: '' };

    //? AFTER COMPONENT MOUNTS, FIND THE LATITUDE
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.table(position);
                this.setState({ latitude: position.coords.latitude });
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
        console.table(this.state.latitude);
    }

    //? RENDER THE COMPONENT
    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>{this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return (
                <div>
                    <HemisphereDisplay latitude={this.state.latitude} />
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default App;
