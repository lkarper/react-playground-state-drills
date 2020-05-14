import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    static defaultProps = {
        bulletInChamber: 8
    };

    handleSpin = () => {
        this.setState({
            spinningTheChamber: true
        });
        this.interval = setInterval(() => {
            const randNum = Math.floor(Math.random() * 8) + 1
            this.setState({
                chamber: randNum,
                spinningTheChamber: false
            }); 
            clearInterval(this.interval);
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    fetchMessage = () => {
        if (this.state.spinningTheChamber) {
            return 'Spinning the chamber and pulling the trigger';
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return 'Bang!!!!';
        } else if (this.state.chamber) {
            return "You're safe";
        }
        
        return '';
    }

    render() {
        return (
            <div>
                <p>{this.fetchMessage()}</p>
                <button onClick={this.handleSpin}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;