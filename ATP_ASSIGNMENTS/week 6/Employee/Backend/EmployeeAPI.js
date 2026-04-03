import exp from "express";
import { EmployeeModel } from "./models/employee.js";

const emp = exp.Router();

emp.post("/create", async (req, res) => {
    try {
        const newDoc = new EmployeeModel(req.body);
        await newDoc.save();
        res.status(201).json({ message: "New employee inserted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

emp.get("/read", async (req, res) => {
    try {
        const list = await EmployeeModel.find();
        if (list.length > 0)
            res.status(200).json({ msg: "List of employees", payload: list });
        else
            res.status(404).json({ msg: "No employees found" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

emp.put("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const employee = await EmployeeModel.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true }
        );
        if (employee)
            res.status(200).json({ msg: "Employee updated", employee });
        else
            res.status(404).json({ msg: "Employee not found" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

emp.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const employee = await EmployeeModel.findByIdAndDelete(id);
        if (employee)
            res.status(200).json({ msg: "Employee deleted", employee });
        else
            res.status(404).json({ msg: "Employee not found" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export { emp };