# Adjoa-s-Calendar


1. Get parent of button clicked (already done)
2. For that parent, get id. - https://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery 
3. From that id get hour number. id is in format "hour-X" and you need to get "X". You can look at something like https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
4. Set event name in local storage for that hour number