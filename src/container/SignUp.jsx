import React, { Component } from 'react'
import './style.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boshlash: 0,
            data: [],
            itemsCount: 10,
            allData: [],
            todo: {}
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {

                var slice = data.slice(this.state.boshlash, this.state.boshlash + this.state.itemsCount)
                console.log(slice)

                this.setState({
                    allData: data,
                    data: slice

                })
            })


    }
    clickHandler = (e) => {
        const selectedPage = e.target.type;
        const boshlash = selectedPage * this.state.itemsCount;
        this.setState({
            boshlash: boshlash
        }, () => {
            this.loadMoreData()
        }
        );
    }
    loadMoreData() {
        const data = this.state.allData;
        const slice = data.slice(this.state.boshlash, this.state.boshlash + this.state.itemsCount)
        this.setState({
            data: slice
        });
    }

    inputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ todo: { ...this.state.todo, [name]: value } });
        console.log(this.state)
    }


    formHandler = (e) => {
        e.preventDefault();
        const { data, todo, allData } = this.state;
        const id = allData.length + 1;
        this.setState({
            data: [...data, { ...todo, id }]
        });
    }
    render() {
        const { title, userId } = this.state;
        console.log(this.state)
        return (
            <div>
                <h2>Sign Up Now!</h2>
                <form action="" onSubmit={this.formHandler}>

                    <p>
                        <label htmlFor="">Title</label>
                        <input
                            value={title}
                            type="text" name="title"
                            placeholder="Your title"
                            onChange={this.inputHandler}

                        />
                    </p>
                    <p>
                        <label htmlFor="">User</label>
                        <input
                            value={userId}
                            type="number"
                            name="userId"
                            placeholder="Your userId"
                            onChange={this.inputHandler}

                        />
                    </p>
                    <button type='submit'>Sign Up</button>
                </form>
                <table>
                    <thead>

                        <th>Id</th>
                        <th>Title</th>
                        <th>UserId</th>
                    </thead>
                    <tbody>
                        {this.state.data.map((item, index) =>
                            <tr key={index}>

                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.userId}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div class="pagination" onClick={this.clickHandler}>
                    <a href="#">&laquo;</a>
                    <a href="#" type="0" >1</a>
                    <a href="#" type="1">2</a>
                    <a href="#" type="2" >3</a>
                    <a href="#" type="3">4</a>
                    <a href="#" type="4">5</a>
                    <a href="#" type="5">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        )
    }
}
