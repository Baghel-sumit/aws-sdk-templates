const AWS = require('../index');

const region = 'ap-south-1';

const client = new AWS.DynamoDB({ region });

const params = {
  TableName: "YourTableName",
  KeySchema: [
    {
      AttributeName: "PrimaryKey",
      KeyType: "HASH",
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: "PrimaryKey",
      AttributeType: "S",
    },
    // Add additional attribute definitions if needed
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

client.createTable(params, (error, data) => {
  if (error) {
    console.error("Error creating DynamoDB table:", error);
  } else {
    console.log("DynamoDB table created:", data);
  }
});