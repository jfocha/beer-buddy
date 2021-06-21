# movie-buddy
Movie Buddy - Your friend at the movies

## Purpose
A companion for the movies. The landing page shows new releases with their corresponding poster art, plot summaries, and links to more info. The search function on the homepage makes an API call based on user input to display the searched movie's art, plot, and link. Next, there's a Favorites page that allows users to search for their favorite movies and then drag and drop said movies to a top ten ranking system. The ranks are persistent by localStorage. Also, there's a Movie Time! page that allows users to search for theaters prioritizing proximity. 

## Development Process
We started out with a very basic wire frame that we cobbled together over Zoom. From there, I started to try an envision what a theater would look like. After fifteen months in quarantine, the silver screen experience was a pie in the sky figment of my imagination. I vaguely remember red chairs and darkness at the theater, so I went with that theme. The group chose to use the Materialize framework. It's a bit different than Bootstrap and the documentation examples were sparse at times. Materialize cards were used to display the movies since we had art and text to display together. Some sort of pagination, carousel, or swipe functionality will need to be entered in the homepage. 

## Challenges
Since I used two types of cards from Materialize, it was hard to stylize them in one CSS file. So, eventually I had to make to separate CSS files to handle the different styling. Sizing the cards on both the homepage and favorites page was time consuming to say the least. 

## Resources Used
Much thanks to Materialize docs, W3Schoools, UC Berkeley Bootcamp, and most of all my teachers.

## Future Developments
1. New Releases displayed in a carousel on the homepage.
2. Better logic on the Favorites page so that the cards move to the next rank down. Plus, the inclusion of a trash function.
3. The map will display all theaters near a searched area as points. So, a user would only have to type their city.  

## Built With
* HTML
* CSS
* JS
* JQuery

## Website
https://jfocha.github.io/movie-buddy/

## Contribution
Made with ❤️ by Joseph Focha, Andrew Bwogi, Thu Dang, Andrew Lopez

![alt text](./assets/images/screenshot.png)