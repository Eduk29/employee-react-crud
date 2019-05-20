# React CRUD Example

This application is a preliminary study using [React](https://reactjs.org/), so it may contain some errors. Feel free to comment, leave your code review, ask something or any contribution, it will be a pleasure receive them. I hope that you enjoy. :metal:

## Main Goals
- List all registered employees.
- Register a new employees.
- Update an employee.
- Remove an employee.

## Dependencies
- [JSON Server](https://github.com/typicode/json-server)
- [React-Router-Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Bootstrap](https://getbootstrap.com/)
- [Material-UI](https://material-ui.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Node-Sass](https://github.com/sass/node-sass)

## Installation
This project was bootstrapped with [React Create App](https://github.com/facebook/create-react-app). So open the command terminal in a directory of your choice and run the following instructions: 
```bash
git clone https://github.com/Eduk29/crud-react.git
cd crud-react
npm install
```

## Start Application

1 - You need to start the JSON server to get access to a fake API. So open a terminal in your project root directory and run the following instruction:
```bash 
json-server --watch db.json
```
**This command terminal must be open during all application execution.**

2 - After the start of JSON server, you need to start the application. So open another command terminal in your project root directory and run the following instruction:
```bash
npm start
```
3 - Open [http://localhost:4200/employee](http://localhost:4200/employee) to view application in your browser.

The page will reload if you make edits in code.  
You will also see any lint errors in the console.

## Folder Structure
    ├── build/
    ├── config/
    ├── public/
    ├── src/
    |   ├── App/
    |   ├── assets/
    |   |   └── images/
    |   |   └── icons/
    |   ├── components/
    |   |   └── EmployeeTable/
    |   |   └── EmployeeTableActionsMenu/
    |   |   └── EmployeeTableHeader/
    |   |   └── EmployeeTablePaginationActions/
    |   |   └── EmployeeTableRow/
    |   |   └── Masthead/
    |   |   └── TopMenu/
    |   ├── containers/
    |   |   └── Header/
    |   |   └── List/
    |   ├── pages/
    |   |   └── DetailsEmployee/
    |   |   └── Errors/
    |   |   └── ListEmployee/
    |   |   └── NewEmployee/
    |   |   └── RemoveEmployee/
    |   |   └── UpdateEmployee/
    |   ├── services/
    |   ├── theme/
    |   ├── index.css
    |   ├── index.js
    |   └── serviceWorker.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
    └── yarn.lock

## Developers :computer:

José Eduardo Trindade E Marques  
edu.temarques@gmail.com
