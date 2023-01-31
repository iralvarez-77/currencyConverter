const valueCoinOne = 0.0026;
const valueCoinTwo = 385;

function convertir ( coinOne, amount, coinTwo ){

  if ( coinOne === "Pesos" ){
    const result = amount * valueCoinOne;    
    console.log(`${result} ${coinTwo}`);
  } 
  
  if ( coinOne === "Euros" ){
    const result = amount * valueCoinTwo;
    console.log(`${result} ${coinTwo}`);
  }
  
};

console.log( convertir("Pesos", 5000, "Euros") );


