## Employee Directory

This Employee Directory opens to a homepage listing features of the application.

There is a Navigation Bar to allow user to navigate to employees page, where all employees are located upon initial load. There is an option on this page to filter by both job title and department. 

Each employee has an `EDIT` link that navigates to employee page where you can update employee details.
___
## Build

The front end of this application was built with React frontend and React Router for navigation. All styling was done using Semantic React UI library. The app uses the useEffect hook to initial fetch all employees, departments, and job titles and stores to state.

The backend of this application was built using ruby on rails. Mostly all of the api calls are directly towards the employee controller. The employee controller handles the fetching of all employees, the filtering capabilites by department and job title, and the 

Employee data is generated through the seed.rb file. Employee first and last names, photos (avatars), "about" section and year started are randomly generated using the faker gem. All department and job title data is manually created for appropriate department-job title correlation, and updating employee information.

## Setup

### Frontnd

To run the frontend, go into the frontend directory:

```shell
    cd employee-directory-frontend
```
and run the following commands

```shell
    npm install
    npm start
```

### Backend

To run the backend, go into the employee-directory-backend directory:

```shell
    cd employee-directory-backend
```
and run the following commands to setup the ruby on rails backend.

```shell
    bundle install
    rails db:create
    rails db:migrate
    rails db:seed
    rails server
```

## Notes

Missing items to include in a production environment:

- Pagination
- Testing

