// Session 3 : Promise and async/await
(async () => {
  const response = await fetch("http://bangkaterkini.id/api/latest?limit=100");
  let results = await response.json();
  let data = results['results'].filter(post => post.ID >= 850 );
    data = results['results'].filter(post => post.ID <= 857);
    data.forEach((post, key) => {
         console.log(post.ID);
    })
})();


// Session 3 : Homework: Promise and Async/Await

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = function(arrayData){
  return new Promise((resolve, reject) => {
    let dataFilter = arrayData.filter(item => item.constructor === String);
    dataFilter.map((index, key) => {
        return console.log(index.toUpperCase());
    })
  })
};

const sortWords = function(arrayData){
  return new Promise((resolve, reject) => {
    let dataFilter = arrayData.filter(item => item.constructor === String);
    dataFilter.map((index, key) => {
        return index;
    })
  })
};

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))


