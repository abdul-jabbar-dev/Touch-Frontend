'use client'
import React, { useState } from 'react'
import CreatePost from './CreatePost'
import { Button, Modal } from 'flowbite-react'

export default function CreatePostContainer() {
    const actionClose = () => {
        setOpenModal(false)
    }
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <button className='w-full my-4 py-2 rounded-md text-white bg-cPrimary-800 hover:bg-cPrimary-900' onClick={() => setOpenModal(true)}>Create Post</button>

            <Modal className='rounded-md' show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className='border-none pb-0 mb-0'>

                </Modal.Header>
                <CreatePost />

            </Modal>
        </>
    )
}
