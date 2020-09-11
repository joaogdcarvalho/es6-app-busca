const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

/* declaração padrão promise

minhaPromise()
.then(response => {
  console.log(response);
})
.catch(err => {

});

*/

/* declaração async function - menos verbosa

async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

*/

// declaração async function - arrow function
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();