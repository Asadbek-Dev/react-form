import React, { Component } from 'react'

export default class Slidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                img: ''
            },
            num: 0
        }

        console.log('[Constructor].........')
    }

    componentDidMount() {
        console.log('[ComponentDidMount] is.......')
        this.setState({ user: { name: 'Asadbek', img: 'sadfgdsfg' } });
    }


    updateNumber = () => {
        this.setState(oldState => {
            return {
                num: oldState.num + 1
            }
        });
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.num, nextState.num)
        return true
    }

    render() {
        console.log('[Render] is......')
        const { num } = this.state;
        return (
            <div>
                <h1>Hello React {num}</h1>
                <button onClick={this.updateNumber}>Update</button>
            </div>
        )
    }
}
