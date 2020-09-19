# node-task-manager

### Overview

This is complete backend solution for a task manager app built with node and express, using MongoDB for the database. A dev and production environment are setup using environment variables making it easy to switch between the two. A sample `.env` file is available in the repo.

The production version of this application is deployed with Heroku.

### Features

This is a fairly bare bones application. There are of course a lot of great task management applications out there, but I myself prefer a simple approach, so the plan with this was to build something really simple that I can use on a daily basis. However it does provide some cool features.

- **Email**: Sends a welcome email to the user upon sign up and a sorry to see you go email when a user deletes their account via SendGrid.
- **Security**: Uses the popular bcrypt.js password for hashing passwords and json web tokens for managing sessions.
- **Images**: Uses multer for file uploads (in this case profile pictures) with node, managing file size and type and Sharp to transform all images to PNG and resize them.
- **Validation**: is handles via _validator_ to make sure users input the type of data we are looking for.
- **DB**: I opted for mongodb here and used mongoose to make it a better dev experience.
- **Testing**: Testing is handled via Jest, it is not super robust right now, but some key tests are present and hopefully I will add more over time.

###### User Features

Various user focussed endpoints have been created:

- POST request to create a user and sign in.
- POST request to login a user.
- POST request to logout a user.
- POST request to logout a user from all sessions/devices.
- GET request for reading your users profile.
- DELETE request for deleting a user, which also deletes all associated data for that user.
- POST request for adding a profile picture
- DELETE request for deleting a profile picture
- GET request for fetching a profile picture

###### Task Features

- POST request for creating new tasks with a simple description.
- GET request for reading your tasks.
- GET request to read a single task via id.
- PATCH request to update a task's description or completed status.
- DELETE request for deleting a task.

### What's Next?

Obviously at the moment this is a pretty useless project as we have nothing on that frontend that communicates with this backend service, so in time I plan to create a UI to interact with this application, which will then allow users to create an account and manage their tasks.
