# Seedbank
Infrastructure for the 3E Process Seedbank. 

As of now, the plan is to build the client mainly in React. The back-end is currently built in Node, though we intend to eventually replace some of this functionality with a dApp built on Holochain.

## Installation
`cd anarchive` and run `npm install`. Then do the same from the client directory. You'll also need to install knex globally, like `npm i -g knex`. Then copy `.env.example` as `.env` and fill out the values.

### Development
To start a dev environment, `cd anarchive` and `npm run dev`. This starts both the server and client concurrently (view the client at `localhost:3000`).

### React Development
To require authentication to view a given resource, just wrap the route declaration with the `withAuth` helper. E.g., in `/client/App.js`:

```
<Route exact path='/events' component={withAuth(EventsPage)} />
```

## To do
1. Testing
2. More sophisticated handling for JWT invalidation/timeouts (logout currently just clears localStorage)
3. Password reset
