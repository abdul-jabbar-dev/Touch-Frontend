'use client'

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { ReactNode, useEffect, useState } from "react"
type FormInput = {
  name: string,
  required?: boolean
  type?: string,
  size?: 'small' | 'large',
  id?: string,
  value?: string | string[] | undefined,
  placeholder?: string,
  label?: string,
  buttonName: string
  icon?: ReactNode,
  // handleSubmit: ((value: any) => any) | undefined
  onSubmit: (data: Record<string, any>, event: any) => any
}

export default function InBuildInput({ name, type = 'text', id, label, placeholder, value, required, buttonName, icon, onSubmit }: FormInput) {

  const { register, handleSubmit, resetField } = useForm<FieldValues>({ resetOptions: { keepIsSubmitted: false } })

  return (
    <>
      {label && label}
      {label && required && <h2 className="text-red-800"> *</h2>}

      <label htmlFor={id} className="mb-2 text-sm font-medium text-cPrimary-900 sr-only dark:text-cPrimary-600">{label}</label>
      <div className="relative">
        <form onSubmit={handleSubmit((data, event) => { onSubmit(data, event); resetField(name) })}>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            {icon}
          </div>

          <input {...register(name)} name={name} type={type} id={id} className={" block p-2  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cPrimary-800 focus:border-cPrimary-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cPrimary-800 dark:focus:border-cPrimary-800 w-full   ".concat(icon ? " pl-10 " : " pl-3 ")} placeholder={placeholder} required />
          <button className="text-white absolute right-1.5 bottom-[.3rem] bg-cPrimary-800 hover:bg-cPrimary-900 focus:ring-4 focus:outline-none focus:ring-cPrimary-700 font-medium rounded-lg text-sm px-3 py-1 dark:bg-hover-600 dark:hover:bg-cPrimary-700 dark:focus:ring-cPrimary-800">{buttonName}</button>
        </form>
      </div>`

    </>
  )
}