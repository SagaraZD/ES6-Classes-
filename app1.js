//Extending classes

class Person {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}` ;
    }

}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;

    }

    static getMembershipCost() {
        return 550;
    }
}

const john = new Customer('John', 'Ooe', '555-555-55', 'Standerd');

console.log(john.greeting());

console.log(Customer.getMembershipCost());