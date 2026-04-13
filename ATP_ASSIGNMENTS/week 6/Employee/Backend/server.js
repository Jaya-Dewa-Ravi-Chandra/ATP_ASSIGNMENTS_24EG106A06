import exp from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { emp } from "./EmployeeAPI.js";
import cors from "cors"

config();

const app = exp();
app.use(exp.json());
app.use(cors({origin:"https://empfrontend-1wgr.onrender.com",credentials: true}))
app.use("/employee", emp);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("DB connected");

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        });

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

connectDB();
