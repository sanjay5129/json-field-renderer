# Field Rendering React Application

## Introduction

This simple application renders a collection of fields supplied as a JSON object.

## Installing Packages and Running App

### Switch to the React App folder

```
cd json-field-renderer
```

### Package Installation

In the project directory's terminal run below command to install all the required packages

```
npm i
```

### App start

In the project directory's terminal, create a .env file with along the format of .env.example.

Then run the below command

```
npm run dev
```

### Note

- The data, I have assumed might have more than 1 modal per page and that is how I have designed the codebase. Generally, there is 1 modal per page and that would have made the code a bit simpler.
- I did not use Typescript as the requirement was for Javascript. I also did not use prop types for validation owing to time constraints.
- The main branch holds the code for the actual question. While it was not required but I have a sample code or sort of a POC for the Additional Requirement question that wanted to perform modal related actions using buttons and link etc. The branch name for the POC is "feature/additional-requirements".
