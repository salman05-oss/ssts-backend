const express = require("express");
const router = express.Router();
const {
  createMemberValidationRules,
  updateMemberValidationRules,
  createEmergencyContactValidationRules,
} = require("../validations/member");

const member = require("../controllers/Member");
const validate = require("../validations/validate");
router.param("memberId", member.getmemberIdById);

router.get("/member", createMemberValidationRules(), member.getAllMember);
router.post("/member", member.create);
router.put(
  "/member/:id",
  updateMemberValidationRules(),
  validate,
  member.update
);
router.get("/member/:id", member.getEmergencyContact);
router.post(
  "/contact/:memberId",
  createEmergencyContactValidationRules(),
  validate,
  member.addNewEmergencyContact
);
router.delete("/member/:id", member.delete);
router.put("/member/:memberId/:businessId", member.addMembership);

module.exports = router;
