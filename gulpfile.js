const env = 'develop';
if(env === 'develop') {
  require('./gulp_develop')//请求开发环境
} else {
  require('./gulp_formal')//请求正式环境
}