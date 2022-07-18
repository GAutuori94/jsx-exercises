import React from 'react';
import { Calculator } from './Calcs';
import { HelloWorld } from './Hello';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <HelloWorld name="Jimmy" />
                <Calculator a={4} b={4}/>
            </div>
        )
    }
}
