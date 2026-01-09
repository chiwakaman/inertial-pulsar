function add(a, b) {
      return Number(a) + Number(b);
}

function divide(a, b) {
      if (b === 0) {
              throw new Error("No se puede dividir por cero");
      }
      return a / b;
}

// Fixed type issue
console.log(add(5, "10")); 
