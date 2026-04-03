import { Schema, model } from "mongoose";

const Employee = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, "Mobile is required"]
    },
    designation: {
        type: String,
        required: [true, "Designation is required"]
    },
    companyname: {
        type: String,
        required: [true, "Company name is required"]
    }
});

export const EmployeeModel = model("Employee", Employee);