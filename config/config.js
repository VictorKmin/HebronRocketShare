module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'local',

  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/initial_db',

  ACCESS_TOKEN_SECRET: 'TOKEN_SEVRET',
  REFRESH_TOKEN_SECRET: 'REFRESH_SEVRET',
  ACTION_TOKEN_SECRET: 'ACTION_TOKEN',

  SYSTEM_MAIL: process.env.SYSTEM_MAIL || '',
  SYSTEM_MAIL_PASSWORD: process.env.SYSTEM_MAIL_PASSWORD || '',

  FRONTEND_URL: 'http://localhost:3000',

  S3_BUCKET: process.env.S3_BUCKET,
  S3_REGION: process.env.S3_REGION,
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_KEY: process.env.S3_SECRET_KEY,

  CORS_WHITE_LIST: process.env.CORS_WHITE_LIST || 'http://localhost:3000',

  TWILIO_ACC_SID: process.env.TWILIO_ACC_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_PHONE: process.env.TWILIO_PHONE,
}
