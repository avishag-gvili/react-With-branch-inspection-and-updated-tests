# Project Name

This repository is set up with a Continuous Integration (CI) process to ensure code quality and conformity in a React application. The CI pipeline is managed via GitHub Actions and includes steps such as dependency installation, running tests, and validation of branch names before allowing merges.

## Overview

The primary goal of this repository is to maintain the integrity of the codebase by automating a CI process. Each time a branch is pushed or a pull request is opened, a series of actions take place to verify the quality of the code and ensure that it adheres to branch naming conventions.

## Key Features

- **Dependency Installation**: Automatically installs all project dependencies using `npm install` or `yarn install`.
- **Code Testing**: Runs unit and integration tests to ensure the functionality of the React application.
- **Branch Name Validation**: Validates the naming convention of the branch before allowing it to be merged.
- **Linting and Formatting**: Ensures code follows standard linting and formatting rules.
- **Automated Feedback**: Provides immediate feedback on pull requests, helping developers catch issues early in the development cycle.

## GitHub Actions Workflow

The CI process is configured via a YAML file located in the `.github/workflows/ci.yml` file. Below is a general structure of the workflow:

```yml
name: CI for React Application

on:
  push:
    branches:
      - '*'
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install Dependencies
        run: npm install

      - name: Run Linting
        run: npm run lint

      - name: Run Tests
        run: npm test

      - name: Validate Branch Name
        run: |
          if [[ ! $GITHUB_HEAD_REF =~ ^[a-z]+\/[a-z\-]+$ ]]; then
            echo "Invalid branch name! Use format 'developer/branch-name'."
            exit 1
          fi


## Workflow Explanation
on: The CI workflow triggers on any push to any branch or pull_request to the main branch.
jobs: The steps of the workflow:
Checkout code: Clones the repository to the runner.
Install Node.js: Installs the version of Node.js required for the project (e.g., version 16).
Install Dependencies: Runs npm install to install the project's dependencies.
Run Linting: Executes linting checks using the command npm run lint to ensure code adheres to defined standards.
Run Tests: Executes unit and integration tests using npm test.
Validate Branch Name: Ensures that the branch name follows the pattern developer/branch-name. If the name does not meet the criteria, the CI process will fail.
Branch Naming Convention
For the CI pipeline to approve a merge, branches must follow a specific naming convention:

The branch name must follow the format: developer/branch-name.
Example valid names:
john/add-new-feature
alice/fix-bug-123
If the branch name does not follow this convention, the CI process will reject the branch, and the pull request will not be allowed to merge.
Prerequisites
To use this workflow, ensure you have the following set up:

Node.js: Ensure the project uses Node.js 16 or compatible.
NPM or Yarn: Project dependencies should be defined in a package.json file, using either npm or yarn.
React Application: The project should be a React-based application with appropriate test cases and linting configurations.
