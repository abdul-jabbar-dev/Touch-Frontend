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
  validation?: any,
  className?: string
}

export default function INput({ name, type = 'text', id, label, placeholder, size, validation, value, required, className }: FormInput) {
  const { control } = useFormContext()

  return (
    <>
      {label && <p className=" font-semibold text-sm text-cPrimary-800 pb-1 block">{label}</p>}
      {label && required && <h2 className="text-red-800"> *</h2>}
      <Controller
        control={control}
        name={name}
        render={({ field: { name, onBlur, onChange, value: onValue, ref, disabled }, formState, fieldState }) => {
           return (

            <TextInput
              ref={ref}
              onBlur={onBlur}
              // onBlur={onblur}
              defaultValue={onValue ? onValue : ""}
              name={name}
              onChange={onChange}
              className={className}
              disabled={disabled}
              required={required}
              type={type}
              id={id}
              placeholder={placeholder}

            />
          )
        }} />
    </>
  )
}