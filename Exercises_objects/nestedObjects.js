let employee = {
    id: 101,
    name: "Alice Smith",
    contact: {
        email: "alice@example.com",
        phone: "123-456-7890"
    },
};

console.log(employee);
console.log(employee.contact.email);

employee.contact.phone = "987-654-3210"
console.log(employee);

employee.contact.address = "123 Main St";
console.log(employee.contact);

delete employee.contact.email;
console.log(employee.contact);
