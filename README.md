### Practice application

Practice application for the "SDET with Playwright" class at https://www.bondaracademy.com

### How to run the application

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run start` to start the application

### How to run the tests
1. Run `npx playwright test` to run all tests
2. Run `npx playwright test --ui` to run all tests in the UI

### Git Workflow Instructions

1. Create and switch to a new branch:
   ```
   git checkout -b lessons/timeout
   ```
   This command creates a new branch named 'lessons/timeout' and switches to it.

2. Commit your changes:
   ```
   git commit -am "Assertion tests"
   ```
   This command stages all modified files and commits them with the message "Assertion tests".
   The `-a` flag stages all modified files, and `-m` allows you to specify the commit message.

3. Push the new branch to the remote repository:
   ```
   git push origin lessons/timeout
   ```
   This command pushes your local 'lessons/timeout' branch to the remote repository named 'origin'.

These Git commands allow you to create a new feature branch, commit your changes, and push them to the remote repository, which is a common workflow in collaborative development.
