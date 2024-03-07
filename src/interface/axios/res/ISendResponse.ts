interface ISendResponse {
    message?: string;
    data?: Record<string, any>;
    meta?: Record<string, any>;
    status: boolean;
}
export default ISendResponse