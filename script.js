//selecting

// const heading = document.getElementsByTagName('h1')[0];

// const cool = document.getElementsByTagName('h1')[1];

// console.log(heading.innerText);

// console.log(cool.innerText);



// const maincontent = document.getElementsByClassName('content')[0];

// console.log(maincontent);

// console.log(maincontent.innerText);



// const buttoncontent = document.getElementById('attention');

// console.log(buttoncontent.innerText);




// // it can do all these above


// const btncontent = document.querySelector('#attention');
// console.log(btncontent.innerText);

// const allh1s = document.querySelectorAll("h1");
// const firsth1 =allh1s[0];

// console.log(firsth1.innerText);
// console.log(document.querySelectorAll(".content")[0].innerTex)


//modify-----------------------------------------------

//---------------replace content---------------------

// const mainContent = document.querySelector('.content');

// mainContent.innerText = 'nice to see you!';

//--------------set attributes-----------------------------

//  

//------add placeholder

// const placeholder1 = document.querySelector('input');

// placeholder1.setAttribute('placeholder', 'enter your name');





//--------create and add-----------------------------

// const subHeading = document.createElement('h2');

// subHeading.innerText = "Nifty50 gain 100 points";
           
//            //add the element to the dom
 
//  document.body.append(subHeading); 

//-------------multi Command using backtick ``-----------------

// const info = document.createElement("div");
// info.setAttribute("class", "info");

// info.innerHTML = `
// <h1>hello</h1>
// <h1>good morning</h1> `;

// document.body.append(info);

//-----------------------------




//-----------------------------------------------

// const response = window.confirm("are you sure you want to leave");
// console.log(response)

//-----------prompt-----

// const username = window.prompt('enter your name');
// console.log(username);

//-----------------settime out fn, timer(ms)---

// setTimeout(() => console.log('karthik'), 4000);

// setInterval(() => console.log('karthik mohan'), 1000);

//-----------cycle colors using set interval-----------


// const colors = ['red', 'blue', 'green'];


// let index = 0;

// const cycleColors = () => {
//     console.log('cycleColors', index);
//     if(index===3){                                   //  number of colors or colors.length
//         index=0;
//     }

//     document.body.style.backgroundColor = colors[index];
//     index++;
// }

// const colorinterval = setInterval(cycleColors, 1000 * 2);

//               // clearInterval(colorinterval);                    //stop the cycle

// //---------after 10s the cycling colors stop--------

// setTimeout(() => clearInterval(colorinterval), 1000 * 10)



//---------onclick-------


// function clicked() {
//     console.log(("this is clicked"));
// }


//----------click to colors cycle start and stop-------


// const colors = ['red', 'blue', 'green'];


// let index = 0;

// const cycleColors = () => {
//     console.log('cycleColors', index);
//     if(index===3){                                   //  number of colors or colors.length
//         index=0;
//     }

//     document.body.style.backgroundColor = colors[index];
//     index++;
// }

//     let colorinterval;

//  function cycleAllColors() {
//     colorinterval = setInterval(cycleColors, 1000);
//  }

// function stopCycleColors() {
//     console.log("stop");
//     clearInterval(colorinterval);
// }



//-----------------oninput and counting the letters------------------------------------

// function count(event) {

//     // console.log('typing', event.target.value);  //event.target - who created the event
  
//     const tweet = event.target.value;       //counting typing
//     const counter = document.querySelector(".counter");
//     counter.innerText = `${tweet.length}/10`
//     console.log('typing', tweet.length, tweet);
// }

//-------------------set and get item in the local storage-------------

// window.localStorage.setItem('tweet', 'nice weather')

// console.log(window.localStorage.getItem('tweet'));

//---------refresh the page textarea its not gone---------------------------

// document.querySelector(".tweet1").innerText = 
// (window.localStorage.getItem('tweet'));      

// updatecount(window.localStorage.getItem("tweet"));


// function count(event) {
        
//     const tweet = event.target.value;
//     updatecount(tweet);
// }

// function updatecount(tweet) {

//     const counter = document.querySelector(".counter");
//     counter.innerText = `${tweet.length}/20`
//     window.localStorage.setItem("tweet", tweet);          
       
// }

//--------browser step---------------

//parse
//dom tree
//resources
//styling
//layout
//paint

//----------synchronous---------

//--------js is a single thread so its step by step execution---------------

// console.log("start");

// for (let i = 0; i < 1000; i++) {
//     console.log("loop is running..");    //only after the end of the loop
// }                                        //mid and end are excute in console

// console.log("mid");

// console.log("end");

//----------asynchronous------------------

// console.log("first");

//          //setTimeout(handlerOrCallback, time);

// setTimeout(function() {
//     console.log("timeout function");       
// },1000);

// console.log("end");

//------------promise-------------------

// const drive = new Promise((resolve, reject) => {          //use capitalize like Promise
//     let age = 17;

//     if (age >=18) {
//         resolve('eligible to drive');
//     }else{
//         reject('not eligible to drive');
//     }
// });

// // use a Promise -95% eg: fetch

// drive
// //   .then((msg) => console.log(msg));   //skip  => promise object
//       // or passing value
//   .then((msg) => "Awesome you are " + msg ) //if age 18 or 18 above .then is execute
//   .then((newMsg) => console.log(newMsg))

//   .catch((details) => console.log(details));  //if age is not 18 .catch is execute




//-----fetch---------------------------------------

// (fetch('https://restcountries.com/v3.1/all')
//     .then((data) => data.json())
//     .then((countries) => countries.forEach((country) => createFlag(country)))
//     .catch((errMsg) => console.log(errMsg)));

//----------another method-------------

// fetch(`https://restcountries.com/v3.1/all`)
//     .then((resp) => resp.json())
//     .then((countries) => {
//         countries.forEach((country) => {            
//             createFlag(country)
//             console.log(country);
//         }); 
//     })
//     .catch((err) => console.log(err));
// //-----------------------

//   function createFlag ({flags, name, population, region, capital}) {
// const info = document.createElement("div");
// info.setAttribute("class", "container");

// info.innerHTML = `
// <div class = "flag-container">
// <img class ="flag" src =${flags.svg} width = "250px" height = "150px">
// </div>

// <div class = "details">
//   <h2> ${name.common} </h2>
//   <p><b>Population:</b>${population}</p>
//   <p><b>Region:</b>${region}</p>
//   <p><b>Capital:</b>${capital}</p>
// </div>`; 

// document.body.append(info);
// }

//---------create a promise with setTimeout inside------------------
// const countdown = () => new Promise((resolve, reject) => {
//     let num = 3;
//     if (num > 0) {
//         setTimeout(() => resolve(num), 1000);
//     }else {
//         reject ("countown completed");
//     }
// });

// countdown()
// .then((n) => { console.log(n);     //console log always define undefine value
//     return n;
// })
// .then((x) => console.log('x', x));

//---------convert call hell into promise chain---------------------

// const countdown = (num) => new Promise((resolve, reject) => {
//     // let num = 3;
//     if (num > 0) {
//         setTimeout(() => {console.log(num); resolve(num)}, 1000);
//     }else {
//         reject ("countown completed");
//     }
// });

// countdown(3)
//   .then(x => countdown(--x))
//   .then(x => countdown(--x))
//   .then(x => countdown(--x))
//   .catch(msg => console.log(msg))






