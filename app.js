//Basic classes


class Person {

    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}` ;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.newLastName = newLastName;
    }

    static addNumbers(x, y){
        return x + y ;
    }

}
const sagara = new Person('Sagara', 'Dayananda', '11-12-1981');

sagara.getsMarried('Jhon');

//console.log(Person.addNumbers(2,2));