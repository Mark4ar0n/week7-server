# Canteen Menu API

Ito ay isang Express backend API na ginawa para sa HCI Week 7, Meeting 2 activity. Ang project na ito ay nagpapakita kung paano gumamit ng multiple routes, route parameters, query strings, at async/await sa JavaScript.

## Features

- Display all available canteen menu items.
- Search for a specific menu item using its ID.
- Filter menu items by category.
- Display menu data using an HTML client.
- Use async/await and fetch() to retrieve data from the API.
- Update menu content dynamically without reloading the page.

## Menu Items

The API contains five menu items:

| ID | Name | Category | Price |
|---|---|---|---|
| 1 | Chicken Adobo Rice Meal | Rice Meals | ₱65 |
| 2 | Halo-Halo | Desserts | ₱45 |
| 3 | Iced Tea | Drinks | ₱15 |
| 4 | Pancit Canton | Rice Meals | ₱55 |
| 5 | Leche Flan | Desserts | ₱30 |

## API Routes

### 1. GET /menu

Displays all available menu items.

Example:
`http://localhost:3000/menu`

### 2. GET /menu/:id

Displays one specific menu item based on its ID.

Example:
`http://localhost:3000/menu/2`

### 3. GET /menu?category=Desserts

Filters menu items based on their category.

Examples:

- `http://localhost:3000/menu?category=Desserts`
- `http://localhost:3000/menu?category=Drinks`
- `http://localhost:3000/menu?category=Rice%20Meals`

The category filter is case-insensitive.

## Async/Await

The client uses `async/await` and `fetch()` to communicate with the Express API.

- `async` allows asynchronous functions.
- `await` waits for the API response.
- `fetch()` requests data from the server.
- `response.json()` converts the response into JavaScript data.
- `try/catch` handles errors.

## Project Files

- `server.js` – Express server and API routes.
- `client.html` – Frontend for displaying and filtering the canteen menu.
- `style.css` – External CSS for the website design.
- `package.json` – Project dependencies and configuration.

## How to Run the Project

1. Clone the repository.
2. Open the project folder in VS Code.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your browser and visit:

   `http://localhost:3000/client.html`

6. Test the category filter and click a menu item to display its details.

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- Fetch API
- Async/Await