// HANDLE THE LOAD EVENT OF THE WINDOW

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

window.addEventListener('submit', () => {
    let parentoutput = window.opener.document.getElementById('loginDetails');
    parentoutput.innerHTML = `ID: ${document.getElementById('id').value} <br>`;
    parentoutput.innerHTML += `Name: ${document.getElementById('name').value} <br>`;
    parentoutput.innerHTML += `Extension: ${document.getElementById('extension').value} <br>`;
    parentoutput.innerHTML += `Email: ${document.getElementById('email').value} <br>`;
    parentoutput.innerHTML += `Department: ${document.getElementById('department').value}`;
    window.close();

})

let cancelEmp = document.getElementById('empForm');

cancelEmp.addEventListener('click', (e) => {
    e.preventDefault();
    window.close();
})