![Logo](https://user-images.githubusercontent.com/26797256/128451731-ba02dea0-b1cc-4296-b8f3-a81f5cb649f1.png)
## Drink This
### Live at

[Check out the app on Heroku](https://drink-this-frontend.herokuapp.com/)
[Explore the backend repo](https://github.com/drink-this/drink-this-backend)
<!-- badges here -->
<!-- badges for last commit, commit activity, state of the build, dependencies up to date -->
Drink This provides cocktail recommendations using a memory-based approach to collaborative filtering. In the front end of this app, we use React in concert with TailwindCSS to provide a clean feel. Movement between pages is smooth and seamless, as opposed to rendering views that may take time to load. Another look and feel to this is the frontend interaction with the backend. We displayed simple thumbnails of the cocktails consumed from the CocktailDB API from the backend.

Check out our [Wiki](https://github.com/drink-this/drink-this-frontend/wiki) for more info.
<!-- features, example of the ML code, link to demo vid, link to wiki homepage -->

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

## Internal APIs (consuming the backend

#### Cocktail Showpage:
Consuming cocktail recommendation from backend on `/api/v1/cocktail/recommendation`
  <img width="1284" alt="recommendation_for_mojito" src="https://user-images.githubusercontent.com/26797256/128460346-6c9c4c50-2b51-4cf9-aa65-6dc352bbddaf.png">

Consuming cocktail details from backend on `/api/v1/cocktail/#{cocktail.id}`

  * Includes: Name, image, recipe (ingredients and measurements), directions, user rating (if applicable)
  * Requires a `cocktail_id` parameter

  <img width="1178" alt="cocktail_show_page" src="https://user-images.githubusercontent.com/26797256/128459231-5f231bd0-8feb-4f7f-93bf-44691688196b.png">

#### Create or update a user cocktail rating
Posting a new rating on the backend database `/api/v1/cocktails/rating`
  
  * Requires `cocktail_id` and `stars` parameters
  * Stars parameter must be an integer from 1-5

#### Display 5 random cocktails for new user to rate
Consuming random cocktails for a new user from the backend on `/api/v1/dashboard`

  <img width="1287" alt="onboarding_dash" src="https://user-images.githubusercontent.com/26797256/128459778-a97bcf31-95b2-4316-9fe3-a607e4bff3d0.png">

#### Search cocktails by name
Consuming a list of cocktails by search from backend on `/api/v1/cocktails/search`

  * Requires a `name` parameter with a string or string fragment to search

  <img width="1181" alt="search_by_name" src="https://user-images.githubusercontent.com/26797256/128459781-69245f45-5486-4b3d-99f2-d0d83e8bb014.png">

#### Search Yelp for locations to find a specific cocktail
Consuming a list of businesses using yelp search from the backend on `/api/v1/search/yelp`

  <img width="1169" alt="search_yelp_for_cocktail" src="https://user-images.githubusercontent.com/26797256/128459772-438b2fb1-4ce1-455f-a45c-39cda860f737.png">

## Testing
Tests with [Jest](https://jestjs.io/docs/getting-started)

## To Add changes

- Create PR
- Add the PR to the Drink This Frontend project
- Link any issues to the PR and use the PR template provided
- Add Authors as Reviewers

### Authors

- Mark Yen: [Github](https://github.com/markcyen) & [Linkedin](https://www.linkedin.com/in/markcyen/)
- Taija Warbelow: [Github](https://github.com/twarbelow) & [Linkedin](https://www.linkedin.com/in/taija-warbelow/)
- Molly Krumholz: [Github](https://github.com/mkrumholz) & [Linkedin](https://www.linkedin.com/in/mkrumholz/)
- Zach Green: [Github](https://github.com/zachjamesgreen) & [Linkedin](https://www.linkedin.com/in/zachjamesgreen/)
- Richard DeSilvey: [Github](https://github.com/redferret) & [Linkedin](https://www.linkedin.com/in/richard-desilvey-33161696/)
- Jermaine Braumuller: [Github](https://github.com/Jaybraum) & [Linkedin](https://www.linkedin.com/in/jermaine-braumuller/)

