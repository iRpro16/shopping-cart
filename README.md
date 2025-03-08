# Shopping Cart Project

This project is part of The Odin Project curriculum. It is a mock site that helps practice the concepts of React Routing and React hooks. For this project, I decided to create a fake store for selling vinyls. It involves a home page, a shopping page where you can filter for items, and a cart page where you can add items to cart.

## Installation
To run this project locally, follow these steps:
1. Clone the repository
```
git clone [https://github.com/iRpro16/shopping-cart.git]
```

2. Navigate to the project directory:
```
cd memory-card
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

## Usage
1. Open the application in your browser at http://localhost:3000.
2. Check how the site works and explore the vinyl store!

## Learning outcomes
* useParams: Learning when to access dynamic parameters in the URL.
* API fetching: Learned how to fetch data using an access token.
* React Routers: Handling client / server-side routing in React applications.

## Challenges and solutions:
## using useParams
Challenge: Had to use this hook for when the URL changed dynamically on the shopping page.
Solution: Using React Routing, under the "<Shop />" component, I included two childen. Inside the "<DisplayGenre />" component I used the useParams hook.

## access token for API fetching
Challenge: Accessing the Spotify API was challenging, as I was not familiar with access tokens to fetch data.
Solution: Upon fetching the acess token with useEffect, I then used the same access_token to call an async function that fetched the data.

## configuring the routes for navigation
Challenge: setting up the routes for the site.
Solution: Having three children for the "<App />" component and then assigning, the "<Shop />" component 2 more children.

## Conclusion
This project was time consuming, but a great learning experience with moderate difficulty. Was not too hard and it allowed me to learn key React concepts such as "useParams" hook, React Routes and also React Testing Library.

## Acknowledgments
Thanks to The Odin Project for providing comprehensive resources and project ideas.
