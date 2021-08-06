![Logo](https://user-images.githubusercontent.com/26797256/128451731-ba02dea0-b1cc-4296-b8f3-a81f5cb649f1.png)
## Drink This
### Live at

[Check out the app on Heroku](https://drink-this-frontend.herokuapp.com/)
[Explore the frontend repo](https://github.com/drink-this/drink-this-frontend)
<!-- badges here -->
<!-- badges for last commit, commit activity, state of the build, dependencies up to date -->
Drink This provides cocktail recommendations using a memory-based approach to collaborative filtering. We use the PyCall gem to import key Python libraries into our Rails app, including `numpy`, `pandas`, and `sklearn`. This allows us, for example, to calculate similarity among users in our application with sci-kit learn's `euclidean_distance` method and to use pandas DataFrames to manipulate data as we pass it through our recommendation engine. The recommendation model takes a user's rating history into account, identifies the closest 15% of users, then makes a recommendation to the requester based on what similar users have rated highly.

## About this Project

Drink This is a cocktail recommendation app that provides cocktail recommendations to the user. In the front end of this app, we used ReactJS to provide a clean feel. Movement between pages is smooth and seamless, as opposed to rendering views that may take time to load. Another look and feel to this is the frontend interaction with the backend. We displayed simple thumbnails of the cocktails consumed from the CocktailDB API from the backend.

## Local Setup for Developers

1. Fork and Clone the repo
2. Install packages: `npm install`
3. Starting on Local: `npm run start`
4. Building the project: `npm run build`

## React / JS Version

- React 17.0.2
- Node 16.3.0

## Package Manager Version

- NPM 6.14.12

## External APIs

- [Google Auth](https://developers.google.com/identity/protocols/oauth2)

## Testing
Tests with [Jest](https://jestjs.io/docs/getting-started)

## To Add changes

- Create PR
- Add the PR to the Drink This Frontend project
- Link any issues to the PR and use the PR template provided
- Add Authors as Reviewers

### Authors

- [Mark Yen](https://github.com/markcyen)
- [Taija W](https://github.com/twarbelow)
- [Molly Krumholtz](https://github.com/mkrumholz)
- [Zach Green](https://github.com/zachjamesgreen)
- [Richard DeSilvey](https://github.com/redferret)
- [Jermaine Braumuller](https://github.com/Jaybraum)
