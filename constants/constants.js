module.exports = {
  CURRENT_YEAR: new Date().getFullYear(),

  EMAIL_REGEXP: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD_REGEXP: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
  PHONE_REGEXP: new RegExp('\\(?\\+[0-9]{1,3}\\)? ?-?\\d{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\\w{1,10}\\s?\\d{1,6})?'),

  IMAGE_MIMETYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
  ],

  IMAGE_MAX_SIZE: 5 * 1024 * 1024 // 5MB
}
