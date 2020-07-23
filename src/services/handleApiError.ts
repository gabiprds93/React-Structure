const handleApiError = (error: any) => {
  let result;
  
  try{
    return result = {
      status: error.response.status,
    }
  }
  catch (error){
    return result = {
      status: 666
    }
  }
}

export default handleApiError;