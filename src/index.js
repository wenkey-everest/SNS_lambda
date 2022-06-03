exports.handler = async (event) => {
  event.Records.forEach((record) => {
    console.log("Message: %j", record);
  });
};
