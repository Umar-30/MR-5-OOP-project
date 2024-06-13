#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
let persons = new person();
let programStart = async (persons) => {
    do {
        console.log("Welcome!");
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You approach the staff room. Please feel free to ask any Question.");
        }
        else if (ans.select == "student") {
            let ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage wiht:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                let name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello! I'm ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello! I'm ${student.name}. Nice to see you again!`);
                console.log("Exiting student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the program ...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
