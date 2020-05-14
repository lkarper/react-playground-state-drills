import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        index: null
    }

    handleClick = (i) => {
        if (this.state.index === i) {
            this.setState({
                index: null
            })
        } else {
            this.setState({
                index: i
            })
        }
    }

    render() {
        const accordionArray = this.props.sections.map((section, i) => {
            return (
                <li key={i}>
                    <button 
                        className={`button${i}`}
                        onClick={()=> this.handleClick(i)}
                    >
                        {section.title}
                    </button>
                    {this.state.index === i ? <p>{section.content}</p> : ''}
                </li>
            )
        });
        if (accordionArray.length === 0) {
            accordionArray.push(<li key={0}></li>)
        }
        return (
            <ul>
                {accordionArray}
            </ul>
        )
    }

}

export default Accordion;