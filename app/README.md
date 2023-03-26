# Project Description

This is client side React app that removes duplicate characters from user input.

It has 2 screens:
- Screen 1: This screen contains text input where users can type the their string, and a button to submit the string to Screen 2.
- Screen 2: This screen contains original string from user, current processed string, and list of card representing each character from current processed string. The card contains delete button to remove all duplicate instance of the character, leaving only one char that is clicked.

This project was bootstrapped with vite react-ts, and added with tailwind-css for faster prototyping

## Project Demo:
This project can be accessed at [https://houseware-frontend-assignment.vercel.app/](https://houseware-frontend-assignment.vercel.app/)

It is deployed using vercel cli

## How to run

- clone this repo
- cd to app directory
- run ```pnpm i``` and let the pnpm install all the dependencies. and then run ```pnpm run dev``` to start the app in dev mode. access [http://localhost:5173](http://localhost:5173) to see your app.

Note:
- pnpm here can be replaced by any js dependency management, e.g npm or yarn
- You need to have Nodejs and npm, yarn, or pnpm installed on your system.

## Requirement checks

[x] The user shouldn't be allowed to go to screen 2 without providing a non-empty value in the input field on screen 1.
https://s1.webmshare.com/9xED4.webm
[x] On Screen 2, clicking on a card delete icon should delete all other appearance of the character in the string. 
[x] The cards shown on the screen should also be updated. 
  [x] Let's say if the original string is `aabcaccda`. Clicking on the first `a` should leave the string as `abcccd`. 
  [x] Let's say the original string is `baebdeb`. Clicking on the character `b` at index 3 (0 index), should result in `aebde`.
[x] Once all the duplicate appearances in the string are removed, the user should see a success header with the original string & the resultant string.
https://s1.webmshare.com/N79wg.webm
[x] The project should be written in JS or Typescript with React. Feel free to use any component library, any other packages, css libraries etc. (used Vite + React Typescript + TailwindCSS)
[x] *Your time is better utilised solving the actual problem rather than re-inventing the wheel.* (used ChatGPT and Github copilot to make fast prototype)
[x] Make sure you do write a readme & a PR description on how to run the project locally.

## Aditional Features.
[x] When Screen2 accessed by the url and user didn't provide any string param, then the app automatically redirect it to 404 page.
[x] In Screen2, I add logic to hide delete button if any char already 1 left.

## Available Scripts

In the project directory, you can run:

### `pnpm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `pnpm run preview`

The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

### `pnpm run deploy`

Deploy this app to vercel.
