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

// const head2 = document.querySelectorAll('h1')[1];

// head2.setAttribute('class', 'red');


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

//--------------------








