let amounts = [1.25, 2.25, 3.25, 4.25];  
  
const showAmountCollection = (item, index, array) => {  
    console.log("Amounts to $" + item);  
    console.log("Amount collection position of amount[" + index + "] == " + array[index]);  
};  
  
amounts.forEach(showAmountCollection); 