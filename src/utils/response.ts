function response(message: string, status: number) {
  return Response.json(
    {
      message,
      success: status < 400,
    },
    {
      status,
    }
  );
}
export default response;
