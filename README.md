# Happening.now

The new way to keep up to date with events in the area. Big or small, planned or impromptu, if you have a few hours to kill, this is the best way to spend your time. Never live a dull moment!

![Browser Version](http://i.imgur.com/fR02BCa.png)

# User Flow

When a user first loads onto the page, the app will first check whether or not the user is on mobile through window size. Then you have many options, listed below throug user stories

- User clicks on the "Sign Up" button, and the signup form slides down from the navbar
- User clicks on the "Login" button, and the login form slides down from the navbar
- User clicks on the an happening from the list on the right hand side of the map, and the map will automatically center on that happening, and generate a marker
- User clicks on the marker on the map, and an info window will open with further information about the happening
- User clicks the "New Happening" button, and the user id redirected to their profile page, where they can create and manage their happenings
- User clicks the "Manage" button, and the user id redirected to their profile page, where they can create and manage their happenings
- User clicks on the "Log Out" button, and will log out of their account

# Approach

I wanted to keep the app as minimalistic as possible, taking out unnecessary pages and content where possible. I made the layout simple, having the logo and the navbar at the top, and then two large boxes with content, side by side, as the bulk of the page. For mobiles, the content boxes are stacked on top of each other, and resized accordingly.

Everything is done from 2 pages, the index page, and the profile page. If you're not logged in, then you can only access the index page. The app still allows users who have not registered to access any events that registered users have already added to the map.

![Mobile Version](http://i.imgur.com/9ADUTg6.png)

![Mobile Version with Menu](http://i.imgur.com/skqmPxa.png)

# Technologies Used
  - HTML
  - CSS, SCSS
  - JavaScript
  - jQuery
  - Ruby on Rails
  - Backbone.js
