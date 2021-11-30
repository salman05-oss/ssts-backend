const UnauthorizedError = require("../../../exceptions/UnauthorizedError");

const isAuthHandlerByUserIdFromBody = async (req, res) => {
  const userId = await req.body.userId;

  if (!userId) return false;

  if (req.tokenData._id !== userId) {
    throw new UnauthorizedError();
  }
  return true;
};
module.exports = isAuthHandlerByUserIdFromBody;
