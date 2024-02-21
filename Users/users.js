class User {
    constructor(email, password, name, address, phoneNumber) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    //Getter and Setter methods for User class 
    getEmail() {
        return this.email;
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }

    getPassword() {
        return this.password;
    }

    setPassword(newPassword) {
        this.password = newPassword;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getAddress() {
        return this.address;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(newPhoneNumber) {
        this.phoneNumber = newPhoneNumber;
    }
}

class Customer extends User {
    constructor(email, password, name, address, phoneNumber) {
        super(email, password, name, address, phoneNumber);
        // create a unique id as an identifier
    }
}

// defines all employees
class Employee extends User {
    constructor(email, password, name, address, phoneNumber) {
        super(email, password, name, address, phoneNumber);
        // create a unique id as an identifier
    }
}

// differentiates all employees from manager-only actions
class Manager extends Employee {
    constructor(email, password, name, address, phoneNumber) {
        super(email, password, name, address, phoneNumber)
    }
}


