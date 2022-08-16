const upperChars = (str) => {

  let result ='';

  for (let i = 0; i < str.length; i++) {
    result = (i === 0 || str[i-1] === ' ') ? `${result}${str[i].toUpperCase()}`:`${result}${str[i]}`;
  }
  return result;
};

console.log(upperChars('hello, world'));