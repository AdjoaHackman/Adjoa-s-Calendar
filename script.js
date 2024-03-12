// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements // in the html.
$(document).ready(function () {
  // var advancedFormat = require('dayjs/plugin/advancedFormat')
  // dayjs.extend(advancedFormat) 
  const currentDate = dayjs();
  const formattedDate = currentDate.format('dddd, MMMM D');
  $("#currentDay").text(formattedDate)
  console.log(formattedDate);
  const currentTime = parseInt(currentDate.format('H'));
  // $()
  // alert(currentTime)
  // if (currentTime > 9) {
  //   $("#hour-9").addClass("future");

  // } 
  
  for (var i=9; i<18; i++) {
    // console.log(currentTime)
    var idDiv = "#hour-"+i
    if (i == currentTime) {
      $(idDiv).addClass("present");
      // alert("present")
    }else if (i < currentTime) {
      $(idDiv).addClass("past");
      // alert("past")
    }else {
      $(idDiv).addClass("future")
      // alert("future")
    } 
  } 
  //I had to work with my TA on the code below because I was having trouble with local storage and saving whatever is written in the text area. As you can see we tried to put it in a for loop but I got confused after looking up how to do it. I knew to use localstorage.getItem but had so much trouble with HOW to use it.
  $('#hour-9').children().eq(1).val(localStorage.getItem('hour-9'));
  $('#hour-10').children().eq(1).val(localStorage.getItem('hour-10'));
  $('#hour-11').children().eq(1).val(localStorage.getItem('hour-11'));
  $('#hour-12').children().eq(1).val(localStorage.getItem('hour-12'));
  $('#hour-13').children().eq(1).val(localStorage.getItem('hour-13'));
  $('#hour-14').children().eq(1).val(localStorage.getItem('hour-14'));
  $('#hour-15').children().eq(1).val(localStorage.getItem('hour-15'));
  $('#hour-16').children().eq(1).val(localStorage.getItem('hour-16'));
  $('#hour-17').children().eq(1).val(localStorage.getItem('hour-17'));

  // for (var i=9; i<18; i++) {
  //   var currentkey = "hour-" + i 
    // if (JSON.parse(localStorage.getItem(currentkey))) {
      // var timeblock = $("#currentkey")
      // $("#hour-9 .description").val(localStorage.getItem("hour-9"))
      // timeblock.children(":eq(1)").text(JSON.parse(localStorage.getItem(currentkey)))
      // console.log(timeblock)
  $(".saveBtn").click(function(){
    var key = $(this).parent();
    var container = $(this).parent();
    var containerId = container.attr("hour-");
    // console.log(key.attr("id"));
    // console.log(key[0].id)
    // alert("id");
    // console.log(key.children()[1].value)
    var savedText = key.children()[1].value
    //went through DOM traveral with my tutor in line 36
    container.textContent = savedText; 
    localStorage.setItem(key[0].id,savedText);
   
  //  if (localStorage.getItem(key[0].id)) {
  //I tried the using localstorage.getItem here which is why I made the comment in line 67, also for line 62.
  //  }
    //the key will save the information based on the hour
    //I had "text-area" as the class in the query selector but my tutor informed me that that is not where people are putting the text so I need to put a class thats within the text area element. 
    // console.log()
    // container.find(".text-center");
    
    // var savedText = JSON.parse(localStorage.getItem("description"));
    // if (savedText) {
    //   descriptionSavedText = savedText;
    // }
    // localStorage.setItem("description",JSON.stringify(savedText))

    // var savedText =localStorage.setItem("description")
    // if (savedText) {
    //   savedText.push = document.querySelector("text-center")
    // } else {
    //   savedText = []
    // }
  })
})
    // var saveText = document.querySelector("description").value;
    // if (localStorage.getItem("description")) {
    //   field.value = localStorage.getItem("autosave");
    // }
    // field.addEventListener("change",() => {
    //   localStorage.setItem("autosave",field.value);
    // })
//     }
// })
//"this" is in reference to the element that the function is attached to - which in this, is the save button. 
// How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?
  //get the parent of the button and we will have the element that has the ID
//How might the id be useful when saving the description in local storage?
  //when I click the button, figure out what hour its for, then once we have the hour, store the event name that I defined for the hour

  //depending on the hour, we need the class of present, future or past
//only need the hour for the daily planner
  // const f=currentDate.format('dddd, MMMM Do')
  // alert(formattedDate);
  // alert(f)
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the// time-block containing the button that was clicked? How might the id be // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  //need to put a period before the class name here like css
  // var nineam = document.querySelector()
  //trying to use this source for the local storage https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage 