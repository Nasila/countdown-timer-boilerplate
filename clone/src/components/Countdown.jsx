import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

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
                    console.log(this.state.count);    
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
        console.log("count",count);
        return (
            <div>
                <Clock timeInSeconds={count}/>
                <CountdownForm onSetCountdownTime={time => this.startTimer(time)}/>
            </div>
        );
    }
}

export default Countdown;