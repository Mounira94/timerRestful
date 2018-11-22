import React, { Component } from 'react';
class Text extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="main">
                <div className="time-desc">
                    <span className="time-text">Hour </span>
                    <span className="time-text">Minute </span>
                    <span className="time-text">Second</span>
                </div>
                <div className="time-btn" >
                    <button className="btn">Start</button>
                    <button className="btn">Reset</button>
                </div>
            </main>

        )
    }
}
export default Text;