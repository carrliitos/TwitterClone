# Tweeder - Twitter clone
A basic twitter clone built to demonstrate the full stack (client, server, database)
![Tweeder sample](https://github.com/carrliitos/TwitterClone/blob/master/sample.png)

With the same features of Twitter:
 - Anyone can send a tweed
 - Anyone else can see all the tweeds that have been sent

## Deployment
Unfortunately, this project is not hosted yet. So, for deployment you'll need:
- Node.js and MongoDB
	- Access the [server folder](https://github.com/carrliitos/TwitterClone/tree/master/server), and run `npm start`
		- This runs the app in the development mode. 
		- Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
	- You will also need to install [live-server](https://www.npmjs.com/package/live-server) since node is not initialized for the client side.
	- Once live-server is installed, access the [client folder](https://github.com/carrliitos/TwitterClone/tree/master/client), and run `live-server`

## Client side
- uses ***Skeleton*** as CSS framework

## Server side
- Uses ***Express*** package as framework to listen for requests that come from client.
- Uses ***Morgan*** package as middleware library which will log all incoming requests for debug purposes.
- Uses ***CORS*** package as middleware library which uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
- Uses ***bad-words*** package for filtering out unnecessary and unclean tweeds.
- Uses ***rate-limiting*** middleware for Express to limit repeated requests to server.

## Database
- Uses ***MongoDB*** as the main database program.
- Uses ***Monk*** as a library to connect to MongoDB.

# TODO
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Add comments/replies to a tweed
- [ ] User accounts
	- instead of users just entering their name
- [ ] User @mentions
- [ ] Realtime feed of tweeds
