const responseCodes = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INVALID_REQUEST: 400,
  FORBIDDEN: 403,
  TIMEOUT: 403,
  EXCEPTION: 500,
};
const responseMessages = {
  SUCCESS: "SUCCESSFUL",
  UNAUTHORIZED: "UNAUTHORIZED",
  NOT_FOUND: "Not Found",
  INVALID_REQUEST: "INVALID REQUEST",
  FORBIDDEN: "FORBIDDEN",
  TIMEOUT: "GATEWAY TIMEOUT",
  EXCEPTION: "INTERNAL SERVER ERROR",
};
 export function success (message:any)  {
    return {
      code: responseCodes["SUCCESS"],
      message: responseMessages["SUCCESS"],
      body: message,
    };
  }
  export function unauthorized (message:any)  {
    return {
      code: responseCodes["UNAUTHORIZED"],
      message: responseMessages["UNAUTHORIZED"],
      body: message,
    };
  }
  export function badRequest(message:any){
    return {
      code: responseCodes["INVALID_REQUEST"],
      message: responseMessages["INVALID_REQUEST"],
      body: message,
    };
  }
  export function notFound (message:any){
    return {
      code: responseCodes["INVALID_REQUEST"],
      message: responseMessages["INVALID_REQUEST"],
      body: message,
    };
  }
  export function exception(message:any){
    return {
      code: responseCodes["EXCEPTION"],
      message: responseMessages["EXCEPTION"],
      body: message,
    };
  }

  export function forbidden(message:any){
    return {
      code: responseCodes['FORBIDDEN'],
      message: responseMessages['FORBIDDEN'],
      body: message,
    }
  }

