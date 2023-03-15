## Houseware

### Company information 

Houseware's vision is to empower the next generation of knowledge workers by putting the data warehouse in their hands, in the language they speak. Houseware is purpose-built for the Data Cloud’s untouched creators, empowering internal apps across organizations. 

### Why participate in an Octernship with Houseware

Houseware is changing the way the data warehouse is leveraged, and we want you to help build Houseware! Our team came together to answer the singular question, "how can we flip the value of the data warehouse to the ones who really need it, to the ones who drive decisions". 

In this role, you'll have the opportunity to work as a Frontend engineer with the Houseware team on multiple customer-facing projects. You'd be involved with delivering the optimal user experience for the end user, while taking complete ownership of engineering challenges - this would include communicating with the stakeholders, setting the right expectations, and ensuring top quality for the code & the product being shipped.

### Octernship role description

We're looking for frontend developers to join the Houseware team. 

We are hell-bent on building a forward-looking product, something that constantly pushes us to think by first principles and question assumptions, building a team that is agile in adapting and ever curious. While fast-paced execution is one of the prerequisites in this role, equally important is the ability to pause and take stock of where product/engineering is heading from a long-term perspective. Your initiative is another thing that we would expect to shine through here, as you continuously navigate through ambiguous waters while working with vigor on open-ended questions - all to solve problems for and empathize with the end users.

| Octernship info  | Timelines and Stipend |
| ------------- | ------------- |
| Assignment Deadline  | 26 March 2023  |
| Octernship Duration  | 3-6 Months  |
| Monthly Stipend  | $600 USD  |

### Recommended qualifications

- You have a solid problem-solving framework.
- You know Javascript and the Browser ecosystem very well; we love polyglot programmers and have services written in Go and Python.
- We write React; Typescript, so we expect you to be well versed with React. If you have worked with Typescript or any typed language before, it's a plus.

If you love to optimize web vitals, do SSR, have worked with Bundlers, and multi-threading in JS excites you, we can’t wait to talk.

### Eligibility

To participate, you must be:

* A [verified student](https://education.github.com/discount_requests/pack_application) on Global Campus

* 18 years or older

* Active contributor on GitHub (monthly)

# Assignment

## Duplicate character remover

### Task instructions

Develop an app in reactjs, with two screens.
- Screen 1: Provide an input field and a button with text 'Submit'. 
    - User should be able to put in any value in the input field. Clicking on the button should redirect user to screen 2. 
    - If the input field is empty or has only space characters, the user should be shown an alert asking them to provide a non-empty value. In this scenario, we should not redirect the user to screen 2.

- Screen 2: Let's iterate over each character of the string and render them as a card on the UI. Each card should have the character, and a delete icon on top. Clicking on the delete icon should delete all duplicate instances of the chosen character in the string. We should make sure that only the clicked instance of the character remains on the screen. 
    - Cards for the same characters should have the same background color. 
    - If there are no more characters with greater than 1 appearance in the string, we shall render a success header. 
    - We should also show the original string and the new resultant string. 
    - We should provide a back button to go back to screen 1. 
    - If the user goes back to screen 1, the input field should be cleared/empty.

### Task Expectations

- The user shouldn't be allowed to go to screen 2 without providing a non-empty value in the input field on screen 1.
- On Screen 2, clicking on a card delete icon should delete all other appearance of the character in the string. 
- The cards shown on the screen should also be updated. 
  - Let's say if the original string is `aabcaccda`. Clicking on the first `a` should leave the string as `abcccd`. 
  - Let's say the original string is `baebdeb`. Clicking on the character `b` at index 3 (0 index), should result in `aebde`.
- Once all the duplicate appearances in the string are removed, the user should see a success header with the original string & the resultant string.
- The project should be written in JS or Typescript with React. Feel free to use any component library, any other packages, css libraries etc. 
- *Your time is better utilised solving the actual problem rather than re-inventing the wheel.*
- Make sure you do write a readme & a PR description on how to run the project locally.

### Task submission

Students are expected to use the [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) when working on their project. 

1. Please push your final code changes to your main branch
2. Please add your instructions/assumptions/any other remarks in the beginning of the Readme file and the reviewers will take a look
3. The PR created called Feedback will be used for sharing any feedback/asking questions by the reviewers, please make sure you do not close the Feedback PR.
The assignment will be automatically submitted on the "Assignment Deadline" date -- you don't need to do anything apart from what is mentioned above.
4. Using GitHub Issues to ask any relevant questions regarding the project


### Resources

- [React - Getting started](https://reactjs.org/docs/getting-started.html)
- [Create-react-app](https://create-react-app.dev/)

