# Tweeder - Twitter clone
A basic twitter clone built to demonstrate the full stack (client, server, database)

With the same features of Twitter:
 - Anyone can send a tweed
 - Anyone else can see all the tweeds that have been sent

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
