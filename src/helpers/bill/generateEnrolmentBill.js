const { Bill } = require("../../models");
const { partialCharge } = require("../../helpers/bill");

const generateEnrolmentBill = async (data, session) => {
  /**
   * charge the annual club membership charge
   * generate the monthly charge in advance for the whole remaining term period
   *
   * get partialCharge
   */
  const billPayload = {};
  const billPayloads = [];
  await Bill.create(billPayloads, session);
};

module.exports = generateEnrolmentBill;
