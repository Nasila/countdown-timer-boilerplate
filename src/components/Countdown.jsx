import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import './style.css';

class Countdown extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.startTimer = this.startTimer.bind(this);
        this.countDownTimer = this.countDownTimer.bind(this);
    }

    startTimer(time) {
        this.setState({count: time});
        this.countDownTimer();
    }

    countDownTimer() {

        this.timer = setInterval(() => {
            if(this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1});  
               }
            if(this.state.count === 0) {
                clearInterval(this.timer);
                this.setState({
                    count: 0
                })
            }
            },1000)
            
    }
       
    render() {
        const {count} = this.state;
        return (
            <div className="clock-count">
                <Clock timeInSeconds={count}/>
                <CountdownForm onSetCountdownTime={time => this.startTimer(time)}/>
            </div>
        );
    }
}

export default Countdown;