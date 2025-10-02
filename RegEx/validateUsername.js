function validateUsr(username) {
  const pattern = /^[0-9a-z]{4,16}$/;
  return pattern.test(username);
}

console.log(validateUsr('asddsa'))
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'))
console.log(validateUsr('____'))
