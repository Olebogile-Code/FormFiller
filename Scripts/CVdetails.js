//Create form variable by selecting form element 
const form = document.querySelector('form');

//add event listener when program should run 
form.addEventListener('submit', (e) =>{
    //prevent default behaiour of html
    e.preventDefault();

    const fd = new FormData(form);

    // convert form to a js object 
    const obj = Object.fromEntries(fd);

    //Convert obj data to string data so you may paste on another page
    const json = JSON.stringify(obj);

    //save data in local storage 
    localStorage.setItem('form', json);

    // select page to paste it
    window.location.href = "./Confirm.html";

    //printing results onto console 
    // console.log(obj);
})



// const form = document.getElementById('form');

// //Get element data by ID
// const Username = document.getElementById('Username');
// const Email = document.getElementById('Email');
// const IDnumber = document.getElementById('IDnumber');
// const Phone = document.getElementById('Phone');

// //when to get data after sumbit
// form.addEventListener('submit', function(){
//     //prevent default behaiour of html
//     e.preventDefault();

//     //extracting data of form
//     const Usernamevalue = Username.value;
//     const Emailvalue = Email.value;
//     const IDnumbervalue = IDnumber.value;
//     const Phonevalue = Phone.value;

//     //Store saved data in local storage
//     localStorage.setItem('Username', Usernamevalue);
//     localStorage.setItem('Email-Adress', Emailvalue);
//     localStorage.setItem('ID-Number', IDnumbervalue);
//     localStorage.setItem('Phone-Number', Phonevalue);
// })

