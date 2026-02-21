const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      lowercase: true,
      unique: [true, "email already exists"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email format",
      ],
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
      minlength: [6, "password must be at least 6 characters long"],
      select: false, // Exclude password from query results by default
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // If password is not modified, skip hashing
  }
  this.password = await bcrypt.hash(this.password, 12);
  return next();
});
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
const userModel = mongoose.model("User", userSchema);
module.exports = userModel; // Export the User model for use in other files
