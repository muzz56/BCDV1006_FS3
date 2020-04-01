
const os = require('os');

exports.systemInfo = () => {
    console.log(`Operating Sytem Info :
    CPU-Architecture: ${os.arch()} 
    Host-Name: ${os.hostname()} 
    OS-Name: ${os.type()}`);
}

exports.userInfo = () => {
    console.log(`User Info: 
        User Name: ${os.userInfo().username} 
        Home dir: ${os.userInfo().homedir}`);
}
