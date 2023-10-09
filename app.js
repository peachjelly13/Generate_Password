let password1 = document.getElementById('lefttext');
let password2 = document.getElementById('righttext');
const length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol ="!@#$%^&*()_-+=~`></?[]{}\|"
const allchars = upperCase + lowerCase + number + symbol;

function generatepassword1(){
  let password = "";
  let passwords = "";
  password+= upperCase[Math.floor(Math.random()*upperCase.length)];
  passwords+= upperCase[Math.floor(Math.random()*upperCase.length)];
  password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
  passwords += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password+= number[Math.floor(Math.random()*number.length)];
  passwords += number[Math.floor(Math.random()*number.length)];
  password+= symbol[Math.floor(Math.random()*symbol.length)];
  passwords += symbol[Math.floor(Math.random()*symbol.length)];
  while(length>password.length){
    password+=allchars[Math.floor(Math.random()*allchars.length)];
  }
  while(length>passwords.length){
    passwords += allchars[Math.floor(Math.random()*allchars.length)];

  }
  password1.value = password;
  password2.value = passwords;

}
function copypassword2(){
  password1.select();
  document.execCommand("copy");
}
function copypassword1(){
  password2.select();
  document.execCommand("copy");
}
