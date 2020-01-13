// INFORMATION ABOUT OPERATING SYSTEM

const os = require('os');

//Platform -> win32
console.log(os.platform());

//CPU Arch -> x64
console.log(os.arch());

//CPU Core Info -> Object <Intel>
console.log(os.cpus());

// Free memory -> 350 something?
console.log(os.freemem());

//Total memory -> 845
console.log(os.totalmem());

//Home dir 
console.log(os.homedir());

//Uptime
console.log(os.uptime());