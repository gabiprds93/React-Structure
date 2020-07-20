const handleApiError = (error: any) => {
  let result;
  if(error.response){
    return result = {
      status: error.response.status,
    }
  }
}

export default handleApiError;