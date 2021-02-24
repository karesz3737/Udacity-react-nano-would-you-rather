# Udacity Nanodegree Would You Rather project.

# To get Started!

```
To be able to start and run the project the user needs to have Node installed on her/his computer.
If the user does have Node installed needs to run "npm install" to download all dependencies and node modules.
After the successful installation the user can run "npm start" to run the CRA application.
```
# UI

```
For the most of the design Semantic ui library was used as well as custom css design.
```
# Tech

```
The CRA application was Built with React.js as well as Redux
```
# Middleware

```
To persist the Redux store  redux-persist middleware was used as well as redux-thunk for async operations.
After the component unmounts all data from local storage will be cleared.
```
# Login Page

```
The application starts with the Login Page.
User needs to sign in with the three existing profiles.
After the user signs in the user id will be added to the Redux store as an authenticated user.
If the user did not signed in and tries to add a new question, will be redirected to 404.page.
```
# Leaderbord Page

```
-After signing in, the user will be redirected to Leaderbord page.
For the navigation from react-router-dom package the Browserrouter component was used.
The user will have a chance to add questions by clicking on the New Poll button.
User can view his/her current status of the answered or unanswered questions.
The user can view the current author of the question as well as, who answered the question.
```


