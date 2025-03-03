class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address, "Address");
        this.city = this.validateAddress(city, "City");
        this.state = this.validateAddress(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhoneNumber(phoneNumber);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipPattern = /^[0-9]{5,6}$/;
        if (!zipPattern.test(zip)) {
            throw new Error("Zip code must be 5 or 6 digits.");
        }
        return zip;
    }

    validatePhoneNumber(phoneNumber) {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneNumber)) {
            throw new Error("Phone number must be exactly 10 digits.");
        }
        return phoneNumber;
    }

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }
}

// Example usage
try {
    const contact = new AddressBookContact(
        "John", "Doe", "1234 Main St", "New York", "New York", "10001", "1234567890", "john.doe@example.com"
    );
    console.log("Contact added successfully:", contact);
} catch (error) {
    console.error(error.message);
}

module.exports = AddressBookContact;
