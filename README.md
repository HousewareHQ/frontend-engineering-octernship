# LIVE LINK
https://duplr.vercel.app/

# frontend-engineering-octernship
### Packages used
 react-icons :"for delete icon"
 react-toastify:"for error pop up"

### INSTRUCTION

1. After the app has been started, type the character with some character having double letters. 
2. All characters typed would be displayed, and the user will be given an option to delete a partcuular character from the string.
3. After deletion, the original string would be displayed with the resultant string shown.


 ### Main PROJECT
 I started by creating two container form and wrapper(box).
 Then rendered the both of them which i used conditional rendering to seperate them.
 The first one being the form is rendered first then when a user provides an info,the user moves to the second stage or container --> this was made possible by the use of useState which was set to true initially then to false when user submits form with input.

 ### FORM
 The form holds the key to the second stage,which can only be accessed when one submits the form with an input(string),if not a popup comes up with an error message

 ### SECOND STAGE
  The second stage works like this.
  we map our array of strings,render it with a card element with a delete icon child.
  The delete Icon contains both the index and value of it's parent container using html dataset to save it,we then accessed it in our function using Html getAttribute,filter the array and then update the state.
  We already have a useEffect that uses the char state as it's dependency so when we update our state it runs.
  It checks if chars has been updated then if duplicates exists,if it doesn't then we update our header
