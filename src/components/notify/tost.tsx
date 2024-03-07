
import { toast } from 'react-toastify'

export default async function tost(fn: Promise<any> | (() => Promise<any>), { isSuccess, isError, isLoading }: { isSuccess?: string, isError?: string, isLoading?: string }) {
    const d = await toast.promise(
        fn, {
        pending: {
            render() {
                return isLoading || "Waiting"
            },
            icon: false,
        },
        success: {
            render({ data }) {
                if (data.error) {
                    throw data.error
                } else {
                    return isSuccess || data.data.message
                }
            },
        },
        error: {
            render(data) {
                return isError || (data as any).data.message
            }
        }
    }
    )
    return d
}
