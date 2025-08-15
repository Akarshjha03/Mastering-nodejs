# REST API Project with Express

## Steps Followed

1. **Initialized npm**
   - Ran `npm init -y` to create a default `package.json` file.

2. **Installed Express**
   - Used `npm install express` to add Express as a dependency.

3. **Defined Start Script**
   - In `package.json`, added:
     ```
     "scripts": {
       "start": "node index.js"
     }
     ```

4. **Downloaded JSON Data**
   - Generated mock user data from **https://mockaroo.com/**
   - Saved the file as `MOCK_DATA.json` in the project folder.

5. **Created REST API**
   - Implemented a basic Express server in `index.js`.
   - Added a `GET /users` route to return HTML with user names.
   - Routes are based on `MOCK_DATA.json` data.

6. **Planned Middleware for Other Methods**
   - `PUT`, `POST`, and `DELETE` routes will be implemented inside a `middleware` folder for cleaner code structure.
