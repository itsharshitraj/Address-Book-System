class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}


const contact = new AddressBookContact(
    "John", "Doe", "123 Main St", "New York", "NY", "10001", "123-456-7890", "john.doe@example.com"
);
console.log(contact);
