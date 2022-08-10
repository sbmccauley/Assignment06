// HANDLE THE LOAD EVENT OF THE WINDOW

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

let btn = window.document.getElementById('btnAddEmployee');
btn.addEventListener('click', function() {
    window.open('add-employee.html', 'popup', 'width=400,height=600').moveTo(((window.screen.width - width)/2), ((window.screen.height - height)/2));
   
} )
