# Duplicate Character Remover : Assignment
This is a ReactJS app that allows users to remove duplicate characters from a string.
It has two screens:

- Screen 1: A form where users can input a string and submit it to the app.
- Screen 2: A view where the app displays the original string, the current string, and a list of cards representing each character in the current. Users can click on the delete icon on each card to remove all duplicate instances of that character in the string except the one that is being clicked.

**Note:** Link to view the app: https://duplicate-char-remover.web.app/ . **I have deployed it on firebase, more about it later in the readme.**

## Instructions to run this project locally
1. Clone the repository:
```
git clone https://github.com/Patel-Muhammad/frontend-engineering-octernship.git
```
2. Navigate to the **app** directory:
```
cd app
```
3. Install dependencies:
```
npm install
```
4. Start the app locally:
```
npm start
```
5. Open the app in browser:
```
http://localhost:3000
```

## Assumptions
- Capital and small letters are considered the same.

## Requirements 
All of the requirements for the project have been fulfilled:
- Users are not allowed to go to Screen 2 without providing a non-empty value in the input field on Screen 1.
![Duplicate character remover (1)](https://user-images.githubusercontent.com/96219910/226846013-33ce2e2c-d4b3-455c-b1a7-b75f952e9baa.gif)

<br>
<br>

- Clicking on a card delete icon on Screen 2 deletes all other appearances of the character in the string, except the one that is clicked and the current string is being updated on clicking the delete icon.(here I clicked on the letter "b" to show as an example)
![Duplicate character remover (2)](https://user-images.githubusercontent.com/96219910/226847913-ebced252-d8dc-477e-b704-327923020a16.gif)

<br>
<br>

- Cards for the same characters have the same background color.
![Duplicate character remover (3)](https://user-images.githubusercontent.com/96219910/226849462-6da93f73-9f29-4fd2-956f-ba8e7d31ff82.gif)

<br>
<br>

- When there are no more characters with greater than 1 appearance in the string, a success header is rendered.
![Duplicate character remover (4)](https://user-images.githubusercontent.com/96219910/226850180-ce6e49f5-fbe9-4812-95ef-71a231b2df5c.gif)

<br>
<br>

- New current string is always updated and shown on screen2
![Duplicate character remover (5)](https://user-images.githubusercontent.com/96219910/226851533-6f662ef2-4765-4b02-b6b6-d41987fac2ef.gif)

<br>
<br>

- The input field is cleared on return to first screen

https://user-images.githubusercontent.com/96219910/226858884-32f6f066-198b-4bf2-87bd-b05d689edce3.mp4

<br>
<br>

- There is a back button on screen 2 which navigates user to screen 1 when clicked
![Duplicate character remover (6)](https://user-images.githubusercontent.com/96219910/227168837-6794860a-d915-4880-bc6f-99cd09963d97.gif)

<br>
<br>

- The project is written in ReactJS and uses react-toastify and react-icons library.


## Additional Features
- The app is completely responsive and can be used on mobile phones as well.
<img height="600px" src="https://user-images.githubusercontent.com/96219910/226855819-e9d27009-574a-42f0-adeb-420e46218800.gif">

- The app is deployed on Firebase. I also have created a workflow file for github actions so that the app is automatically built and deployed whenever a commit is made or a pull request is created on main branch.

**Link to view the site:** https://duplicate-char-remover.web.app/








