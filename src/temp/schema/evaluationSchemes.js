const EVALUATION_SCHEME_STATUS = require("./constants");

module.exports.evaluationSchemes = {
  name: String,
  status: EVALUATION_SCHEME_STATUS,
  levelcount: Number,
  levels: [
    {
      skills: [] /** array of strings */,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
};
