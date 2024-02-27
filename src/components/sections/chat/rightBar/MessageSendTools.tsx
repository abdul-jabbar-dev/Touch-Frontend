import InBuildInput from '@/components/parts/common/UI/fromUser/InBuildInput'
import React from 'react'

export default function MessageSendTools() {
  return (
    <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
      <InBuildInput placeholder='Write a message' buttonName='Send' name='message' onSubmit={e => console.log(e)} />
    </section>
  )
}
