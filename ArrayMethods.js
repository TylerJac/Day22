const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const nameJose = users.find(user => user.firstName == 'Jose');
const isPremium = users.filter(user => user.isPremiumMember);
const lastNames = users.map(user => user.lastName);
const loginRate = users
    .filter(user => user.logins> 10)
    .map(user => `${user.firstName} ${user.lastName}`);
const totalLogins = users.reduce((total, user) => total + user.logins, 0);

console.log(nameJose);
console.log(isPremium);
console.log(lastNames);
console.log(loginRate);
console.log(totalLogins)