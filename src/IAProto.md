# IAProto
***This article is not over yet.***
## What is IAProto?
IAProto is a simple Api query language that provides an alternative to REST. It allows clients to define the structure of the data required. IAProto main objective was to reduce the size of the request in simple method. IAProto also been used as a API standard.
#### Why we need to reduce size?
- It will make page load faster.
- reduce the ram usage.
- reduce the data usage.

## IAProto Request
Every IAProto request should use `POST` method and request data should be provide in the request body. HTTP headers should contain the `Content-Type` and `Content-Length` with its data. every request must contain the "query" and use "filter" for the data reduce.

#### parameters
| name | data type | description |
| - | - | - |
| query | string | request function name
| filter | object | [filtering options](#filtering-options)

#### example
```
POST https://ianime.now.sh/api/v2/endpoint
{
  "query": "name",
  "user": "_knight48_",
  "filter": {
    "scores": 0
  }
}
```

## IAProto Response
HTTP response status code always will be `200 OK`. IAProto remove all the empty when response. basically `null`, `""`, `false`, ... values like these will not in the response. 

response should use "success" to indicate if there was a error and successful response will contain a `result`.
#### example
```
{
  "success": true,
  "result": {
    "user": "_knight48_",
    "id": 12,
    "state": "offline"
  }
}
```
every unsuccessful response will contain a `error`. it should contain a error code and a error message. type of error code must be string or number and the error message should be a string.
#### example
```
{
  "success": false,
  "error": {
    "code": "ENOENT",
    "message": "No such file or directory"
  }
}
```
