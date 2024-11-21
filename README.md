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

2. Add all new and modified files to the staging area:
   ```
   git add .
   ```
   This command adds all new and modified files in the current directory and its subdirectories to the staging area.

3. Commit your changes:
   ```
   git commit -m "Assertion tests"
   ```
   This command commits the staged changes with the message "Assertion tests".

4. Push the new branch to the remote repository:
   ```
   git push origin lessons/timeout
   ```
   This command pushes your local 'lessons/timeout' branch to the remote repository named 'origin'.

Note: If you're certain that you want to stage and commit all changes, including modifications to existing files and new files, you can combine steps 2 and 3 using:
```
git commit -am "Assertion tests"
```
The `-a` flag automatically stages all modified files, but it doesn't include new (untracked) files. Use this shortcut only when you're sure you don't have any new files to add.

These Git commands allow you to create a new feature branch, commit your changes, and push them to the remote repository, which is a common workflow in collaborative development.