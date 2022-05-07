import React, { Component } from 'react';

class Derivative extends Component {
    constructor(props) {
        super(props)
        this.state = {functionInput: "", derivativeResult: ""}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({functionInput: event.target.value, derivativeResult: this.state.derivativeResult})
    }

    async handleSubmit(event) {
        event.preventDefault()

        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({expression: this.state.functionInput, wrt: "x"})
        }

        await fetch("http://192.168.0.109:8000/calculus/symbolic-derivative", request)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            console.log(data.symbolicDerivative)
            this.setState({functionInput: this.state.functionInput, derivativeResult: data.symbolicDerivative})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        this.props.headerTitleCallback("Calculus | Derivative")
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.functionInput} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <textarea value={this.state.derivativeResult}>
                </textarea>
            </div>
        );
    }
}

export { Derivative };