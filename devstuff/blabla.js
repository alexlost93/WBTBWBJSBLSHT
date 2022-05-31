const lesenka = (initD) => {
  console.log(typeof initD);
  for (let i = 1; i <= initD; i++) {
    let newString = '';
    for (let j = 1; j <= i; j++) {
        newString += initD.toString();
    }
    console.log(newString);
  }
  
};
lesenka(100);
