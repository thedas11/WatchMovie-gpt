# watchMovies-gpt

-install parcel
-Header
-Routing of the app
-Login form
-Sign up form
-Form validation
-useRef Hook
-Used the api for sign up and sign in
-to move to the Redux store we used another api called onAuthStateChanged which will be called on clicking of the sign up button/ sign in button
-steps for autheticating is (checks for the format-> creats an user(API)-> onauthstatechanged(API)->browse to the page and display the user from store)

-Get data from TMDB API
-Custom hook for Movie
-Create movieSlice
-updated the store with data after api call from TMDB
-Fetch data for tailer video from the Video of TMDB by passing the key of the movie[0] 
-made a custom Hook for adding trailer details
-Updated store with trailer details
-Embedded youtube video to make it autoplay and mute
-Established the memoization feature to avoid multiple api calls, making it just once for updating the store




# Appfeatues

-Login/Sign up page
 -Login/signup form
 -route to browse
-Browse
 -header
 -Main movie
  - trailer
  -description of the movie
  -suggested movies

-Browse Page
 -Main container
  -It contains the Movie tile and description
  -Movie trailer playing in the Background
 -Secondary container


  # Points to remember

  -whenever we try to load a page that checks for if the user is authenicated ( signed up) if it's so then the user will be directed to the browse
  page and not ton the login page or sign up page.

  - everytime the user's auth changes  the "onAuthStateChanged" is called and the user will be redirected to the respective page
  acc to the auth.

  - e. prevent default() to block the default behaviour of a form submit or button 
  which refeshes the page. we use onSubmit() for form.

  -

