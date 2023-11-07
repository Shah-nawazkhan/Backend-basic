require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "Shah-nawazkhan",
    "id": 143605731,
    "node_id": "U_kgDOCI8_4w",
    "avatar_url": "https://avatars.githubusercontent.com/u/143605731?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Shah-nawazkhan",
    "html_url": "https://github.com/Shah-nawazkhan",
    "followers_url": "https://api.github.com/users/Shah-nawazkhan/followers",
    "following_url": "https://api.github.com/users/Shah-nawazkhan/following{/other_user}",
    "gists_url": "https://api.github.com/users/Shah-nawazkhan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Shah-nawazkhan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Shah-nawazkhan/subscriptions",
    "organizations_url": "https://api.github.com/users/Shah-nawazkhan/orgs",
    "repos_url": "https://api.github.com/users/Shah-nawazkhan/repos",
    "events_url": "https://api.github.com/users/Shah-nawazkhan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Shah-nawazkhan/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shahnawaz khan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I'm a Full-Stack developer with experience in HTML, CSS, JavaScript, PHP, MySQL, Laravel, and React",
    "twitter_username": null,
    "public_repos": 25,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-30T10:44:49Z",
    "updated_at": "2023-11-07T15:29:59Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('shahnawazdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Shahnawaz code</h2>')
})

app.get('/github' , (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})