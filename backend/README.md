# The Backend

Listens to POST calls from the VCS webhooks.
When a call is received, it sends the event data on via sockets
to all clients that are subscribed to the particular repository.

## Installing
```
$ yarn
```

## Usage
```
$ node index.js
```
