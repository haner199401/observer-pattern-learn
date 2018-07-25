/**
 * @author haner
 * @date 2018/7/25
 * @brief
 */


class Teacher {
    constructor(name) {
        this.students = [];
        this.name = name;
    }

    addStudent(student) {
        this.students.push(student);
        return this;
    }

    sayCommand(command) {
        this.students.forEach(student => student.execCommand && student.execCommand.apply(student,[command,this]));
    }
}


class Student {
    constructor(name){
        this.name = name;
    }

    execCommand(teacherCommand){
        // default behavior
        console.log(`${this.name}:${teacherCommand}`);
    }
}


export {
    Teacher as default,
    Student
}
