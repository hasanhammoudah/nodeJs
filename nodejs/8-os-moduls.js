const os = require('os')


// info about current user

const user = os.userInfo()

console.log(user)
/* result {

    uid: 501,
    gid: 20,
        username: 'hasanhammoudah',
            homedir: '/Users/hasanhammoudah',
                shell: '/bin/zsh'
}
*/

// method returns the system uptime in seconds

console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)