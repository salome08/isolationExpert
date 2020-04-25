const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    postalCode: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    realEstateSituation: {
      type: String,
      enum: ["PROPRIETAIRE", "LOCATAIRE"],
      default: "PROPRIETAIRE",
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["MAISON", "APPARTEMENT"],
      default: "MAISON",
      required: true,
    },
    partToIsolate: {
      type: String,
      enum: [
        "RAMPANTS",
        "MURS_INTERIEURS",
        "SOUS_SOL",
        "COMBLES",
        "VIDE_SANITAIRE",
        "PLUSIEURS_PARTIES",
      ],
      default: "RAMPANTS",
      required: true,
    },
    heaterType: {
      type: String,
      enum: ["GAZ", "FIOUL", "ELECTRICITE", "AUTRE"],
      default: "GAZ",
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("User", userSchema);
