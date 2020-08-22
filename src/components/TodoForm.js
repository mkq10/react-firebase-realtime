import React, { Component } from 'react'

class TodoForm extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit} className='form' autoComplete="off">
                <div className='row d-flex align-items-center justify-content-between mb-2'>
                    <div className="">
                        <input className='form-input form-control-lg col-10' id='todo' type="text" placeholder='Add Your Todos...' onChange={this.handleChange} required value={this.state.title} />
                    </div>
                    <button type="submit" className='btn btn-success'>
                        Add Item
                    </button>
                </div>
            </form>
        )
    }
}

export default TodoForm