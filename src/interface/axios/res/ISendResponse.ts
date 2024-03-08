interface ISendResponse<D = Record<string, any>, M = Record<string, any>> {
  message?: string;
  data?: D;
  meta?: M;
  status: boolean;
}
export default ISendResponse;
