const accountId = 144335
let accountEmail = "rishav@gmail.com"
var accountPassword = "password"
let accountPermission;


//prefer not using var because var causes issues with block scope and functional scope


console.log(accountId);
console.table([accountEmail, accountPassword, accountId, accountPermission])