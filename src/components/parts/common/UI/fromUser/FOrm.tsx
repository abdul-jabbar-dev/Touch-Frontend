'use client'
import { ReactElement, ReactNode } from "react"
import { FormProvider, SubmitHandler, UseFormReturn, useForm } from "react-hook-form"

type FormConfig = {
    defaultValues?: Record<string, any>
}
type FormProps = {
    className?: string,
    children?: ReactElement | ReactNode,
    submitHandler: SubmitHandler<any>,
    reset?: (methods: UseFormReturn) => any
} & FormConfig


export default function FOrm({ children, submitHandler, className, defaultValues, reset }: FormProps) {

    const formConfig: FormConfig = {}
    if (!!defaultValues) formConfig['defaultValues'] = defaultValues

    const methods = useForm<FormConfig>(formConfig)
    const onSubmit = (data: any) => {
        submitHandler(data)
        if (reset) reset(methods)

    }
    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
