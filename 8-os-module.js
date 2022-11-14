// OS module
const os = require('os');

// 1.  Info about current user
const user = os.userInfo();

console.log('User Info');
console.log(user);

// 2. Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`);

// 3. 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
