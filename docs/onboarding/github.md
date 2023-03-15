# Introduction
Before we explain how to work with us on projects, we would like to provide you with an overview of our development process.

Our team works with a two-step process: planning and implementation. During planning, we determine the tasks needed to complete the project and assign them to different developers. During implementation, we work on these tasks and submit them to code review to ensure that everything meets our quality standards.

We also use a version control system for our projects, which means we store all versions of our code on a remote repository, like GitHub. This allows us to keep track of all the changes made to the code over time and work together on the code without interfering with each other.

To start working with us, you must first set up your environment by creating SSH keys and logging into GitHub. Once you are logged in, you can fork the project to your own GitHub account, which allows you to clone it to your local computer and start working on it.

When you're done with your changes, you can submit a pull request (PR) to incorporate them into the main project. We use conventional comments to document our changes, which helps us understand what was changed and why.

We hope this overview gives you a better idea of our development process and how we work together on projects. If you have any questions or comments, please feel free to contact us.

## Setup SSH Keys and Environment
As a new member of the team, setting up your development environment is the first step to start working with us. You must create SSH keys and log into GitHub to get started.

Here is how you can create SSH keys and log into GitHub:

1-Open Terminal or Command Prompt
2-Run the following command: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
3-Enter a file in which to save the key, for example: /Users/you/.ssh/id_rsa
4-Enter a passphrase (or leave it empty if you don't want to use a passphrase)
5-Run the following command to copy your SSH key to your clipboard: pbcopy < ~/.ssh/id_rsa.pub
6-Log in to your GitHub account and go to Settings > SSH and GPG keys.
7-Click on "New SSH key" button.
8-Paste the SSH key in the "Key" field and give it a title, for example: "My development machine".
9-Click on the "Add SSH key" button.


## Fork and Pull Request
Once you are logged in to GitHub, you can fork the project to your own account, which allows you to clone it to your local computer and start working on it. You need to regularly fetch from the source repository to stay up-to-date with the latest changes.

When you are done with your changes, it is important to verify your changes by linting and testing your code before submitting a pull request (PR). It is especially important to verify the package.json file and the diffs before submitting a PR.

Here is how you can submit a pull request:

1-Go to the original repository.
2-Click on the "Fork" button to create a fork of the repository on your own GitHub account.
3-Clone the forked repository to your local computer using the following command: git clone git@github.com:your_username/repository_name.git
4-Add the original repository as a remote using the following command: git remote add upstream git://github.com/original_username/repository_name.git
5-Create a new branch for your changes using the following command: git checkout -b my-new-feature
6-Make your changes and commit them using the following command: git commit -am "Add my new feature"
7-Push the changes to your forked repository using the following command: git push origin my-new-feature
8-Go to your forked repository on GitHub and click on the "Compare & pull request" button.
9-Verify the changes and fill in a description of what you changed and why.
10-Click on the "Create pull request" button.

## Conventional Commits

We use conventional comments to document our changes, which helps us understand what was changed and why. It is important to follow the conventional commits format when committing your changes.

Here is an example of a conventional commit message in JavaScript:

```
feat: add new feature

This commit adds a new feature to the application.

```

The first line of the commit message should be a short description of the change, prefixed with one of the following keywords:

-fix: for bug fixes
-feat: for new features
-docs: for documentation changes
-style: for code style changes, such as white space or formatting
-refactor: for code refactoring without adding a new feature or fixing a bug
-perf: for performance improvements
-test: for changes in test files
-build: for changes in build scripts or dependencies

It is important to follow this format as it makes it easier for everyone to understand the changes made in the codebase.

