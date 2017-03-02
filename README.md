# Git Notifications
Subscribe to real time, native desktop notifications of
version control events for a certain repository.

*NOTE:* Supports the following service's event object schemas: GitHub, Beanstalk and BitBucket. Feel free to create your own formatters.

*NOTE 2:* When using GitHub's webhooks, make sure to set "content type" to "application/json" and check "Just the push event."

![Screenshot](/screenshot.png?raw=true "Screenshot")

## The backend
Get this running on a server, it's going to be the target of
your VCS webhooks.

[ReadMe here.](https://github.com/ThePaavero/git-notifications/blob/master/backend/README.md)

## The CLI client
Use this on your local machine to subscribe to the notifications.

[ReadMe here.](https://github.com/ThePaavero/git-notifications/blob/master/node-client/README.md)

## The debugger
If you want to simulate events without spamming an actual
repository, use the debugger to send mock events to your backend.

[ReadMe here.](https://github.com/ThePaavero/git-notifications/blob/master/debugger/README.md)
