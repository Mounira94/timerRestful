import React, { Component } from 'react';
class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
    }
    Timer = () => {
        setInterval(() => {

            if (this.state.seconds == 60) {
                this.setState({
                    seconds: 0,
                    minutes: this.state.minutes + 1
                })
            } else {
                this.setState({
                    seconds: this.state.seconds + 1
                })
            }
            if (this.state.minutes == 60) {
                this.setState({
                    minutes: 0,
                    hours: this.state.hours + 1
                })
            }
        }, 1000)
    }
    componentDidMount() {
        this.Timer()
    }
    render() {

        return (<main className="main">
            <div className="time" >
                {this.state.hours < 10 ? '0' + this.state.hours : this.state.hours}:{this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}:{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}</div>
        </main>)
    }
}
export default Time;
