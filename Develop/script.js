// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  let saveButtons=$(".saveBtn");
  let timeBlocks=$(".time-block");
  let currentHour=dayjs().format('H');
  let dateDiv=document.querySelector("#currentDay");
  let todaysDate=dayjs().format('dddd, MMMM D')

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


    
    for(let i =0; i<saveButtons.length;i++){
      saveButtons[i].addEventListener("click",function(){
        localStorage.setItem(this.parentElement.id,this.previousElementSibling.value);
      
      })
    }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
   
    
    for(let i=0;i<timeBlocks.length;i++){
      let blockTime=(timeBlocks[i].id).split('hour-').join('').trim();
      if(+blockTime==currentHour)
        timeBlocks[i].classList.add("present")
      else if(+blockTime>currentHour)
        timeBlocks[i].classList.add("future")
      else
      timeBlocks[i].classList.add("past")
    }
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  for(let i=0;i<timeBlocks.length;i++){
    let textBlock=timeBlocks[i].children[1];
    let blockId=timeBlocks[i].id;
    if(localStorage.getItem(blockId)){
      textBlock.textContent=localStorage.getItem(blockId);
    }
  }
  // TODO: Add code to display the current date in the header of the page.
  dateDiv.innerHTML=todaysDate;
});



// GIVEN I am using a daily planner to create a schedule

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
