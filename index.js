const AWS = require('aws-sdk');

const accessKeyId = 'AKIA3RWKCDCQMXKTIE6Q';
const secretAccessKey = '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';

AWS.config.update({
  region: 'ap-south-1',
  accessKeyId,
  secretAccessKey
});

module.exports = AWS;