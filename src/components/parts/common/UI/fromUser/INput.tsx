'use client'

import { TextInput } from "flowbite-react"
import { Controller, useFormContext } from "react-hook-form"
 
type FormInput = {
  name: string,
  required?: boolean
  type?: string,
  size?: 'small' | 'large',
  id?: string,
  value?: string | string[] | undefined,
  placeholder?: string,
  label?: string,
  validation?: any
}

export default function INput({ name, type = 'text', id, label, placeholder, size, validation, value, required }: FormInput) {
  const { control } = useFormContext()
  return (
    <>
      {label && label}
      {label && required && <h2  className="text-red-800"> *</h2>}
      <Controller
        control={control}

        name={name}
        render={({ field }) => (
          /* type === 'password' ?
            <Input.Password
              {...field}
              type={type}
              id={id}
              size={size}
              required={required}
              placeholder={placeholder}
              value={value ? value : field.value}
            /> : */ <TextInput
            {...field}
            required={required}
            type={type}
            id={id}

            placeholder={placeholder}
            value={value ? value : field.value}
          />
        )} />
    </>
  )
}