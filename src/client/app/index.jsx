import React from 'react';
import {render} from 'react-dom';

// load stylesheet
require("../sass/default.scss");

class App extends React.Component {
    render () {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Congratulations
                        </h1>
                        <h2 className="subtitle">
                            You are currently running a NodeJS server.
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

render(<App/>, document.getElementById('app'));