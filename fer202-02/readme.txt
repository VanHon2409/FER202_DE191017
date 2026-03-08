USER ACCOUNT MANAGEMENT APPLICATION

INSTALLED PACKAGES:
- axios: For API requests to JSON server.
- bootstrap & react-bootstrap: For responsive UI and premium components.
- react-icons: For UI icons.
- react-router-dom: For application routing.
- json-server: For mock backend.
- useContext & useReducer: For central state management (AuthContext).

HOW TO RUN THE APPLICATION:
1. Open a terminal and run the JSON Server:
   npm run server
2. Open another terminal and run the React application:
   npm start
3. The application will be available at http://localhost:3000

LOGIN CREDENTIALS (from db.json):
- Admin 1: fudn / 123456
- Admin 2: admin / 123456

FEATURES:
- Full authentication flow with role and status checks.
- Account list with search, filter, and sort.
- Account details view.
- Lock/Unlock account functionality with confirmation and toast notifications.
- Self-lock prevention for the current logged-in admin.
