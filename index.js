var log = require('graygelf')({
  host: process.env.KBC_LOGGER_ADDR,
  port: process.env.KBC_LOGGER_PORT
})

log.info('hello', 'world')
log.info.a('short', 'full', { foo: 'bar' })

