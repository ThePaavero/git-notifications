# The CLI Client

Subscribe to notifications for a repository with this command.
It outputs native desktop notifications on all events, and
logs possible commits to your terminal.

## Installing
1. ``` $ yarn ```

2. Rename `apiConfig.example.json` to `apiConfig.json` and change
the URL to suit your setup (where is your backend running?).

## Usage
```
$ node index.js repo-slug formatter
```
...where "repo-slug" is the slug of the repository and "formatter" is the VCS (beanstalk, bitbucket, github, etc.)
