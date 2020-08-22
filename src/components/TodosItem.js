import React, { Component } from 'react'

class TodosItem extends Component {
    render() {
        const { id, title } = this.props.mytodos
        return (
            <div className='row bg-light mb-2'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <div>
                        <input className='mr-2' type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                        <span>{title}</span>
                    </div>
                    <button className="btn btn-link text-danger" onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default TodosItem