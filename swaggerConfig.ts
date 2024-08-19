import { SwaggerDefinition, Options } from 'swagger-jsdoc';
import dotenv from "dotenv"
dotenv.config

const swaggerDefinition: SwaggerDefinition = {
    "openapi": "3.0.0",
    "info": {
      "title": "Stellus",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": `http://localhost:${process.env.PORT || 7000}`
      }
    ],
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "type": "http",
          "scheme": "bearer"
        }
      }
    },
    "paths": {
      "/api/v1/auth": {
        "post": {
          "tags": [
            "default"
          ],
          "summary": "authenticate",
          "description": "This endpoint generates a JWT Token for authentication in the system.",
          "requestBody": {
            "content": {}
          },
          "responses": {
            "200": {
              "description": "OK",
              "headers": {
                "X-Powered-By": {
                  "schema": {
                    "type": "string",
                    "example": "Express"
                  }
                },
                "Content-Type": {
                  "schema": {
                    "type": "string",
                    "example": "application/json; charset=utf-8"
                  }
                },
                "Content-Length": {
                  "schema": {
                    "type": "integer",
                    "example": "200"
                  }
                },
                "ETag": {
                  "schema": {
                    "type": "string",
                    "example": "W/\"c8-KLNv2cgWnqKsBq85UszWKkKkyH8\""
                  }
                },
                "Date": {
                  "schema": {
                    "type": "string",
                    "example": "Mon, 19 Aug 2024 15:14:40 GMT"
                  }
                },
                "Connection": {
                  "schema": {
                    "type": "string",
                    "example": "keep-alive"
                  }
                },
                "Keep-Alive": {
                  "schema": {
                    "type": "string",
                    "example": "timeout=5"
                  }
                }
              },
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  },
                  "example": {
                    "code": 200,
                    "message": "SUCCESSFUL",
                    "body": {
                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQwODA0ODAsImV4cCI6MTcyNDA4NDA4MH0.XHJQwoVOWc-NSOgu0WeLX5s8r-CiM2qjLRSQlld9Vuo",
                      "expireAt": "60m"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/v1/merchant/": {
        "post": {
          "tags": [
            "default"
          ],
          "summary": "create merchant",
          "description": "This endpoint creates a merchant",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "example": {
                    "name": "John",
                    "surname": "Doe",
                    "email": "JohnDoe@test.com",
                    "nationality": "Nigerian",
                    "dob": "2024-08-19",
                    "homeAddressLine1": "No 12 ABC street",
                    "homeAddressLine2": "No 10 123 street",
                    "postalCode": "12345",
                    "phone": "09000000000",
                    "NRIC": "000000000",
                    "industry": "Technology",
                    "businessWebsite": "www.test.stellus",
                    "productDescription": "test product",
                    "statementDescriptor": "Description",
                    "public_phone": "07000000000",
                    "bankName": "Test Bank",
                    "branchName": "Abuja",
                    "accountNumber": "000000000",
                    "swiftCode": "123456789"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearerAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "headers": {
                "X-Powered-By": {
                  "schema": {
                    "type": "string",
                    "example": "Express"
                  }
                },
                "Content-Type": {
                  "schema": {
                    "type": "string",
                    "example": "application/json; charset=utf-8"
                  }
                },
                "Content-Length": {
                  "schema": {
                    "type": "integer",
                    "example": "849"
                  }
                },
                "ETag": {
                  "schema": {
                    "type": "string",
                    "example": "W/\"351-SYvwyiCpV83pgAFiFBCAzix1qRc\""
                  }
                },
                "Date": {
                  "schema": {
                    "type": "string",
                    "example": "Mon, 19 Aug 2024 15:17:07 GMT"
                  }
                },
                "Connection": {
                  "schema": {
                    "type": "string",
                    "example": "keep-alive"
                  }
                },
                "Keep-Alive": {
                  "schema": {
                    "type": "string",
                    "example": "timeout=5"
                  }
                }
              },
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  },
                  "example": {
                    "code": 200,
                    "message": "SUCCESSFUL",
                    "body": {
                      "personalDetails": {
                        "name": "John",
                        "surname": "Doe",
                        "email": "JohnDoe@test.com",
                        "nationality": "Nigerian",
                        "dob": "2024-08-19",
                        "homeAddressLine1": "No 12 ABC street",
                        "homeAddressLine2": "No 10 123 street",
                        "postalCode": "12345",
                        "phone": "09000000000",
                        "NRIC": "000000000",
                        "id": 40,
                        "createdAt": null,
                        "updatedAt": null
                      },
                      "businessDetails": {
                        "industry": "Technology",
                        "businessWebsite": "www.test.stellus",
                        "productDescription": "test product",
                        "userId": 40,
                        "id": 21,
                        "createdAt": null,
                        "updatedAt": null
                      },
                      "publicDetails": {
                        "statementDescriptor": "Description",
                        "businessWebsite": "www.test.stellus",
                        "phone": "07000000000",
                        "userId": 40,
                        "id": 17,
                        "createdAt": null,
                        "updatedAt": null
                      },
                      "bankDetails": {
                        "bankName": "Test Bank",
                        "branchName": "Abuja",
                        "accountNumber": "000000000",
                        "swiftCode": "123456789",
                        "userId": 40,
                        "id": 17,
                        "createdAt": null,
                        "updatedAt": null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/v1/merchant/{userId}": {
        "get": {
          "tags": [
            "default"
          ],
          "summary": "get merchant",
          "parameters": [
            {
                "name": "userId",
                "in": "path",
                "required": true,
                "schema": {
                "type": "integer"
                },
                "description": "ID of the merchant to fetch"
            }
            ],
          "description": "This endpoint gets the details of a merchant from the database.",
          "security": [
            {
              "bearerAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "headers": {
                "X-Powered-By": {
                  "schema": {
                    "type": "string",
                    "example": "Express"
                  }
                },
                "Content-Type": {
                  "schema": {
                    "type": "string",
                    "example": "application/json; charset=utf-8"
                  }
                },
                "Content-Length": {
                  "schema": {
                    "type": "integer",
                    "example": "811"
                  }
                },
                "ETag": {
                  "schema": {
                    "type": "string",
                    "example": "W/\"32b-ga/kfvt3rAcLBDcphNBX2/4jdBI\""
                  }
                },
                "Date": {
                  "schema": {
                    "type": "string",
                    "example": "Mon, 19 Aug 2024 15:19:30 GMT"
                  }
                },
                "Connection": {
                  "schema": {
                    "type": "string",
                    "example": "keep-alive"
                  }
                },
                "Keep-Alive": {
                  "schema": {
                    "type": "string",
                    "example": "timeout=5"
                  }
                }
              },
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  },
                  "example": {
                    "code": 200,
                    "message": "SUCCESSFUL",
                    "body": {
                      "id": 39,
                      "name": "John",
                      "surname": "Doe",
                      "email": "JohnDoe@test.com",
                      "nationality": "Nigerian",
                      "dob": "2024-08-18T23:00:00.000Z",
                      "homeAddressLine1": "No 12 ABC street",
                      "homeAddressLine2": "No 10 123 street",
                      "postalCode": "12345",
                      "phone": "09000000000",
                      "NRIC": "000000000",
                      "createdAt": null,
                      "updatedAt": null,
                      "businessDetails": [
                        {
                          "id": 20,
                          "industry": "Technology",
                          "businessWebsite": "www.test.stellus",
                          "productDescription": "test product",
                          "createdAt": null,
                          "updatedAt": null
                        }
                      ],
                      "publicDetails": {
                        "id": 16,
                        "statementDescriptor": "Description",
                        "businessWebsite": "www.test.stellus",
                        "phone": "07000000000",
                        "createdAt": null,
                        "updatedAt": null
                      },
                      "bankDetails": [
                        {
                          "id": 16,
                          "bankName": "Test Bank",
                          "branchName": "Abuja",
                          "accountNumber": "000000000",
                          "swiftCode": "123456789",
                          "createdAt": null,
                          "updatedAt": null
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

const swaggerOptions: Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/entity/*.ts'], // Path to the API docs
};

export default swaggerOptions;
