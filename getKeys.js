exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    },
    body: `
WELLY-TOP1
TEST-999
272100544502608783
VIP-KEY-777
`
  };
};
