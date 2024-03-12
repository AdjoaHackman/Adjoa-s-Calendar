# Adjoa-s-Calendar

## Description
The goal of this assignment was to create a daily planner that will save events by the hour. We were given starter code and styling but had to clone it from another repository. I was successful in cloning the repository but accidently cloned the code into a folder within my homework folder so I did not make multiple commits until after I realized what the issue was with my tutor. 

I started out my trying to answer the questions that came with the starter code i.e. "What does 'this' reference in the click listener function?" and by doing the TO DO items. 

I started my code off with the event listener, the save button on line 49, so when the save button is clicked, everything within the container with the id "hour" will apply. I wanted the key to save the information based on the hour, so it made sense to use the id. 

I had to do a bit of research on how to format the date for Dayjs (and also realize that it was already installed). At first, I had trouble with the format listed in the Day.js.org website. The code wouldn't recognize "Do" in line 6 for some reason so I just put "D" and it worked. 

I knew I had to write a for loop for the color coding/hour blocks so I had help from my mentor to write the for loop. I'm used to writing for loops where the i = 0 so it was difficult to comprehend it being 9 this time. I removed the past, present, and future classes from the HTML and then added the classes to the for loop based on the id ("hour-). The alert function was very helpful in testing if this worked! 

Finally, I had to figure out local storage and how to save the user text after refresh. As I commented in the code, I had to work with my TA on the code. We tried to put it in a for loop but I got confused after looking up how to do it. I understand the difference between setItem and getItem and I knew to use localstorage.getItem so that the saved text showed up after refresh but had so much trouble with HOW to use it. After discussing a few different ways to save the user text after refresh, we decided on the code that starts on line 32. I am sure there is a better way to do this, in terms of writing less code, but this is the only one that made sense for now - getting the user text by the key, which in this case, is the hour. Here is my final daily planner:  

<img src="./Assets/Screenshot 2024-03-12 at 12.47.18 PM.png" alt = "screenshot of my finished assignment">

## What Have I Learned?
I am learning that it is okay to not know something. It is still a work in progress. I am still struggling with syntax and how to write the code but I am coming to terms with the fact that this is normal and many others still have this issue. I am at least able to pseudocode what I would like to code. I'm glad JQuery is no longer widely used. 

One fun detail I learned (also commented in the code) is that we can have multiple classes in the HTML code by putting a space in between the class names. I didn't know we could have more than one class within an element. I also see how often my instructors/TA's/mentors console log everything for testing. I learned how useful the console log is vs just seeing if the code worked (if that makes sense?). 

I had a very hard time with local storage during this assignment. I went to tutoring and asked my TA for help because I could not get it. I went to various sites like MDN Web Docs, JavaScript.info, and <a href="https://blog.logrocket.com/localstorage-javascript-complete-guide/" target="_blank" alt = "javascript guide">this site</a> but I was told the key I used for the local storage was undefined. I tried multiple times (as you can see in the code) to get the (key, value) defined and for it to show up in the local storage in my inspector. I also have trouble understanding when to use JSON stringify. This is something I will have to practice multiple times - it's not as clear for me. I am always asking why because it doesn't make the most sense. 

## Credits
I never thought I would have this much support during this journey. I am so thankful for my mentors, TA and instructor for their help. I honestly don't know where I would be without them.

<video src="./Assets/WorkDay_Scheduler_Screen Recording.mov" alt = "screen recording of my homework">

