# Movie Listing Project

A movie listing application built with **React** that fetches data from an external API and displays movies in categories like **Favourites**, **Top Rated**, and **Upcoming**.

## Features

- **Navbar**: A navigation bar with links to various pages such as Top Rated, Upcoming, and Favorites.
- **Search Bar**: Search for movies by movie title.
- **Movie Card**: Displays movie details such as the title, poster, release year and rating.
- **Pagination**: Navigate between pages of movies with pagination controls.
- **Pages**:

  - **Favorites**: Shows the movies marked as favorites by the user.
  - **Top Rated**: Displays the top-rated movies fetched from the API.
  - **Upcoming**: Displays movies that are yet to be released.

  ## Technologies Used

- **React**: The main JavaScript library for building the UI.
- **React Hooks**:
  - `useState`: For managing state variables like search query and movie data.
  - `useEffect`: For making API calls and handling side-effects such as data fetching.
  - `useContext`: For managing global state like favorites across components.
- **React Router**: For routing between different pages (e.g., Top Rated, Upcoming, Favorites).
- **CSS**: For styling the components and making the site responsive on all screen sizes.
- **API**: The app fetches movie data from a movie API ( [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)).

Responsiveness
The app is fully responsive and adjusts based on screen size using CSS media queries. It ensures a seamless experience on mobile, tablet, and desktop devices.
