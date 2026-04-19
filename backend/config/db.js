const mongoose = require("mongoose")

const connectDB = async () => {

try {

await mongoose.connect("mongodb+srv://poojitha:Poojitha%40123@poojitha.lrzna5i.mongodb.net/tracknsave")

console.log("MongoDB Atlas Connected")

} catch (error) {

console.error("MongoDB Connection Error:", error)

process.exit(1)

}

}

module.exports = connectDB