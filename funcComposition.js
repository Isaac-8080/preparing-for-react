
// Definition: 
// Function composition is the process of combining two or more functions where the output of one function becomes the input to another.

const usersInput = document.getElementById('name');

function greetUser(usersInput) { //func to display greeting message

  if (!usersInput) {

    return ('Hello customer!');

  } else {

    return ('Hello ${usersInput}!');

  }

}

function extraText() { //func to display additonal text

  return ('thank you for your input');

}

function func3() {

  const firstFunc = greetUser(usersInput.value); // 1st function called

  const secondFunc = extraText(); // 2nd function called

  return (`${firstFunc}, ${secondFunc}, we will get back to you shortly`); // 1st function, 2nd function plus some extra texts
  
}

document.getElementById('greetBtn').addEventListener('click', () => {

  console.log(func3());
  
  document.getElementById('text').textContent = func3();
  
});