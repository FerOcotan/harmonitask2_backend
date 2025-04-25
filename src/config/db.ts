import mongoose, { connection } from "mongoose"
import colors from "colors"




const connectDB = async () => {

  try {

        
    const connection = await mongoose.connect(process.env.DATABASE_URL)

    const url =  `${connection.connection.host}:${connection.connection.port}`


    console.log(colors.green("MongoDB Connected: "), colors.white(url))


  } catch (error) {

    console.error(colors.bgRed("MongoDB connection error: "), colors.bgRed(error.message))
    process.exit(1)

  }
}
export default connectDB

