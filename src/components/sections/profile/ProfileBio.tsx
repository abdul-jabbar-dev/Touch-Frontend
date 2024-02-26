import Image from 'next/image'
import React from 'react'
import { MdEdit } from 'react-icons/md'
import Details from './Details'

export default function ProfileBio() {
  return (
      <div className="  w-full h-full flex flex-col gap-4">

          <div className="w-full relative">
              <Image
                  alt="Profile Photo "
                  width={600}
                  height={600}
                  style={{
                      objectFit: 'cover',
                  }}
                  className="w-full h-64 inline-block opacity-65 hover:opacity-100 rounded-2xl ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
              <Image
                  alt="Profile Photo"
                  height={200} width={200}
                  className="inline-block bottom-2 left-2 absolute transform rounded-2xl ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
          </div>

          <div className="w-full relative ">

              <div className="my-3">
                  <h1 className="text-4xl">Abdul Jabbar</h1>
                  <h1 className="text-xl text-cPrimary-800">@abduljabbar</h1>
              </div>
              <div>
                  <div className="m-3 text-center mb-8 text-cPrimary-800 my-6">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque minus praesentium voluptatum perspiciatis eos ipsa dolores, libero commodi.</p>
                      <button className="p-1 text-center rounded-full w-full bg-cPrimary-900 text-white text-sm  mt-6 mb-2 flex items-center gap-x-2 justify-center  "><MdEdit color="#fff" className="text-white" />Edit Bio</button>

                  </div>
              </div>
              {/* <Friends /> */}
              <Details />
          </div>

      </div>
  )
}
