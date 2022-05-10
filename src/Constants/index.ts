export default {
  BASE_URL: process.env.NODE_ENV === 'development' ? '/api' : '',//基本路径,
  HTTP_SUCCESS_CODE: 200,
}