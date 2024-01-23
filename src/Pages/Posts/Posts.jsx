import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getPosts, savePost, editPost, delPost } from '../../redux/Reducers/PostReducer'
import { useEffect } from 'react'
import PostModal from './PostModal'


const Posts = ({ getPosts, savePost, editPost, delPost }) => {

  const posts = useSelector(state => state.PostReducer.posts)

  const [active, setActive] = useState(false)
  const [currentItem, setCurrentItem] = useState('')


  useEffect(() => {
    getPosts()
  }, [])

  const OpenModal = () => {
    setActive(prev => !prev)
  }

  const Submitform = (event, values) => {
    if (currentItem) {
      editPost({ ...values, id: currentItem.id })
    } else {
      savePost(values)
    }
    setActive(false)
  }

  const EditPost = (item) => {
    setCurrentItem(item)
    setActive(true)
  }

  const Delete = (item) => {
    delPost(item)
  }

  return (
    <div className='container'>
      <h1 className='text-center display-3'>Posts</h1>
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
                <th>Body</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map(item => <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <div className="d-flex">
                      <button className='btn btn-outline-light btn-sm m-1' onClick={() => EditPost(item)}>edit</button>
                      <button className='btn btn-outline-light btn-sm m-1' onClick={() => Delete(item.id)}>delete</button>
                    </div>
                  </td>
                </tr>)
              }

            </tbody>
          </table>
          <PostModal OpenModal={OpenModal} active={active} Submitform={Submitform} currentItem={currentItem} />
        </div>
      </div>

    </div>
  )
}

export default connect(null, { getPosts, savePost, editPost, delPost })(Posts)