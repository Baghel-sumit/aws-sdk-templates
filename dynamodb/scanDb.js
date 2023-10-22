const AWS = require('../index');

const scanDynamoDb = (params) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  return new Promise((resolve, reject)=> {
    documentClient.scan(params, (err, data)=> {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
};


const params = {
  TableName: 'db-table'
};

scanDynamoDb(params).then(console.log).catch(console.log);