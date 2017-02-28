const axios = require('axios')
const webHookUrl = 'http://localhost:4200'
axios.post(webHookUrl, {
  "trigger": "push",
  "payload": {
    "type": "GitPush",
    "before": "xxxxxxxx",
    "after": "yyyyyyyy",
    "branch": "branch-name",
    "ref": "refs/heads/branch-name",
    "repository": {
      "id": 42,
      "name": "repo",
      "title": "repo",
      "type": "GitRepository"
    },
    "beanstalk_user": {
      "type": "Owner",
      "id": 42,
      "login": "username",
      "email": "user@example.org",
      "name": "Name Surname"
    },
    "commits": [
      {
        "type": "GitCommit",
        "id": "ffffffff",
        "message": "Important changes.",
        "branch": "branch-name",
        "author": {
          "name": "Name Surname",
          "email": "user@example.org"
        },
        "beanstalk_user": {
          "type": "Owner",
          "id": 42,
          "login": "username",
          "email": "user@example.org",
          "name": "Name Surname"
        },
        "changed_files": {
          "added": [
            "NEWFILE"
          ],
          "deleted": [
            "Gemfile"
          ],
          "modified": [
            "README.md"
          ],
          "copied": []
        },
        "changeset_url": "https://subdomain.beanstalkapp.com/repository-name/changesets/ffffffff",
        "committed_at": "2014/08/18 13:30:29 +0000",
        "parents": [
          "afafafaf"
        ]
      }
    ]
  }
})
  .then(console.log)
  .catch(console.log)
