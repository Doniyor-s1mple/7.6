import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'

const PostModal = ({ OpenModal, active, Submitform, currentItem }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <Modal isOpen={active} toggle={OpenModal}>
                        <ModalHeader className='bg-dark'>Add Post</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='form' onValidSubmit={Submitform} model={currentItem}>
                                <AvField name='title' label='Title' />
                                <AvField name='body' label='Body' />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button color='outline-info btn-sm ' form='form'>save</Button>
                            <Button color='outline-warning btn-sm mx-2' onClick={OpenModal}>cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        </div>
    )
}

export default PostModal