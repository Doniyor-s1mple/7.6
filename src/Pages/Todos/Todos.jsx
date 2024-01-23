import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getTodos, saveTodo, editTodo, delTodo, handleCheck } from '../../redux/Reducers/TodoReducer'
import { useEffect } from 'react'
import TodoModal from './TodoModal'


const Todos = ({ getTodos, saveTodo, editTodo, delTodo }) => {

  const todos = useSelector(state => state.TodoReducer.todos)


  useEffect(() => {
    getTodos()
  }, [])


  const [Active, setActive] = useState(false)
  const [currentItem, setcurrentItem] = useState('')

  const OpenModal = () => {
    setActive(prev => !prev)
  }

  const SubmitForm = (event, values) => {
    if (currentItem) {
      editTodo({ ...values, id: currentItem.id })
    } else {
      saveTodo(values)
    }
    setActive(false)
  }

  const EditTodo = (item) => {
    setcurrentItem(item)
    setActive(true)
  }

  const Delete = (item) => {
    delTodo(item)
  }

  


  return (
    <div className='container'>
      <h1 className='text-center display-3'>Todos</h1>
      <div className="row">
        <div className="col-3">
          <input type="search" placeholder='search...' className='form-control' />
        </div>
        <div className="col-9">
          <button className='btn btn-outline-light float-end px-3' onClick={OpenModal}>Add</button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Active</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map(item => <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <input type="checkbox" checked={item.completed} />
                  </td>
                  <td>
                    <div className="d-flex">
                      <button className='btn btn-outline-light btn-sm m-1' onClick={() => EditTodo(item)}>edit</button>
                      <button className='btn btn-outline-light btn-sm m-1' onClick={() => Delete(item.id)}>delete</button>
                    </div>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
          <TodoModal OpenModal={OpenModal} Active={Active} SubmitForm={SubmitForm} currentItem={currentItem} />
        </div>
      </div>

    </div>
  )
}

export default connect(null, { getTodos, saveTodo, editTodo, delTodo })(Todos)