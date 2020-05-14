import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        message: null
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                message: `${this.state.count % 2 === 0 ? 'tick' : 'tock'}`
            });
            if (this.state.count >= 8) {
                this.setState({
                    message: 'Boom!!!!'
                });
                clearInterval(this.interval);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Bomb;