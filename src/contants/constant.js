const FUNCTIONAL_PRIVILEDGES = [
  "BUSINESS_DEFINITION",
  "CLASS_DEFINITION",
  "CLASS_ENROLMENT",
  "CLASS_ATTENDANCE",
  "SESSION_DEFINITION",
  "CATEGORY",
  "PROGRESS_RECORD",
  "MEMBERS",
  "USER",
  "TERM",
  "EVALUATION_SCHEME",
];

const CRUD = ["create", "read", "update", "delete"];
const DATA_PRIVILEDGES_TYPE = ["ALL", "LIST"];
const STARTS_WITH_FILTER = "STARTS_WITH";
const EQUALS_FILTER = "EQUALS";
const FILTER_TYPES = [STARTS_WITH_FILTER, EQUALS_FILTER];
const EVALUATION_STATUS_ACTIVE = "active";
const EVALUATION_STATUS_INACTIVE = "inactive";
const EVALUATION_STATUS = [
  EVALUATION_STATUS_ACTIVE,
  EVALUATION_STATUS_INACTIVE,
];
const ADDRESS_TYPE = ["PRIMARY", "SECONDARY"];
const RELATIONSHIPS = [
  "FRIEND",
  "GRAND_PARENT",
  "UNCLE",
  "AUNT",
  "OTHER",
];
const ENUM_ENROLLED_STATUS = [
  "ENROLLED",
  "WAITLISTED",
  "DROPPED",
  "SUSPEND",
  "RETURN_FROM_SUSPENSION",
];
const  ENUM_DISCONTINUATION_REASON = ["CLASS_TRANSFER", "CANCELLED"];
const ENUM_CLASSES_STATUS = ["ACTIVE", "INACTIVE"];
const ENUM_PAY_FREQUENCY = ["MONTHLY", "ANNUALLY"];
const TERM_STATUS_ACTIVE = "active";
const TERM_STATUS_INACTIVE = "inactive";
const TERM_STATUS = [
  TERM_STATUS_ACTIVE,
  TERM_STATUS_INACTIVE,
];
const ENUM_BUSINESS_TYPE = [
  "LIMITED_COMPANY",
  "LIMITED_LIABILITY_PARTNERSHIP",
  "SOLE_TRADER",
];


const PROGRESS_STATUS=["NOT_STARTED", "IN_PROGRESS", "ATTAINED"]

module.exports = {
  EVALUATION_STATUS_ACTIVE,
  EVALUATION_STATUS_INACTIVE,
  EVALUATION_STATUS,
  FUNCTIONAL_PRIVILEDGES,
  STARTS_WITH_FILTER,
  EQUALS_FILTER,
  FILTER_TYPES,
  DATA_PRIVILEDGES_TYPE,
  CRUD,TERM_STATUS,
  PROGRESS_STATUS,
  ADDRESS_TYPE,
  RELATIONSHIPS,
  ENUM_DISCONTINUATION_REASON,
  ENUM_ENROLLED_STATUS,
  ENUM_CLASSES_STATUS,
  ENUM_PAY_FREQUENCY,
  TERM_STATUS,
  ENUM_BUSINESS_TYPE
};

