const handleApiError = (error: any) => {
  let result;
  
  try{
    result = {
      status: error.response.status,
    }
    return result;
  }
  catch (error){
    return result = {
      status: 666
    }
  }
}

export default handleApiError;