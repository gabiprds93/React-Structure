export const ErrorMessageException = [
  { 
    status: 400,
    msg: ''
  },//error.response.data},
  { 
    status: 401,
    msg: 'Es necesario autenticar para obtener la respuesta solicitada.'
  },
  { 
    status: 403,
    msg: 'El cliente no posee los permisos necesarios para cierto contenido'
  },
  { 
    status: 404,
    msg: 'El servidor no pudo encontrar el contenido solicitado.'
  },
  { 
    status: 408,
    msg: 'El servidor quiere desconectar esta conexión sin usar.'
  },
  { 
    status: 500,
    msg: 'El servidor ha encontrado una situación que no sabe como manejarla.'
  },
  { 
    status: 502,
    msg: 'El servidor obtuvo una respuesta inválida.'
  },
  { 
    status: 503,
    msg: 'El servidor no esta listo para manejar la petición.'
  },
  { 
    status: 504,
    msg: 'El servidor no puede obtener una respuesta a tiempo.'
  },
  { 
    status: 505,
    msg: 'La versión de HTTP usada en la petición no está soportada por el servidor.'
  },
]
export const ErrorMessageComponent = [
]