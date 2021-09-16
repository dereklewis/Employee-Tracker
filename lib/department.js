class Department {
    constructor(id, departmentName) {
        this.id = id;
        this.departmentName = departmentName;
    }
    getId() {
        return this.id
    }
    getDepartmentName() {
        return this.departmentName
    }

}

module.exports = Department