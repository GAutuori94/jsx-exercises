import React from 'react'

export class HelloWorld extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>
    }
}