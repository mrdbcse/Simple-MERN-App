import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    required: true,
    match: /.+\@.+\..+/,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  tenthSchoolName: {
    type: String,
  },
  tenthPercentage: {
    type: Number,
  },
  twelfthSchoolName: {
    type: String,
  },
  twelfthPercentage: {
    type: Number,
  },
  stream: {
    type: String,
  },
});

const User = mongoose.model("User", Schema);
export default User;
