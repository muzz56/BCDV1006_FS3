
let balance = 0;

let deposit = (amount) => {
    balance = balance + amount;
    console.log(`Deposited ${amount} into account`);
}

let withdrawal = (amount) => {
    balance = balance - amount;
    console.log(`Withdraw ${amount} from account`);
}

let checkBalance = () => console.log(`The balance is ${balance}`);

checkBalance();
deposit(100);
checkBalance();
withdrawal(25);
checkBalance();