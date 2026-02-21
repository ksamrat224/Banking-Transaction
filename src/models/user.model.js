const mongoose = require("mongoose");

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
userSchema.pre("save",async function(next) {
    if (!this.isModified("password")) {
})
module.exports = mongoose.model("User", userSchema); // Export the User model for use in other files
