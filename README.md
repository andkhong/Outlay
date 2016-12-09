### Introduction
This was a fun project project that I built for my girlfriend. She is a heavy Instagram user, and in order to keep her followers constantly engaged, she follows themes in her image layout. However, Instagram does not have a feature that allows users to preview the layout without spamming their entire follower base. This is what Outlay does!

When I set out, I thought, I can either use Instagram API or build a web-scraper. The time it would take me to set up a web-scraper would be 20-30 minutes wheras setting up Instagram API, it would take me hours.

I was terribly wrong. Upon my initial attempt, I realized that what I got back was not the data I was looking for. What I got back from the scraper was an unusable circular object. This is because Instagram uses React and React uses the Virtual DOM. That object I was receiving is the Virtual DOM which is a light-weight abstract version of the DOM we see on the platform.

However, upon the request, what we do get back is the HTML is raw string text which is more than enough to use for building this project. I was able to parse the text to find what I was looking for in my Node middleware and send it for React to render!


### How to Run
1. NPM INSTALL
2. Developers: NPM RUN BUILD then run NPM START
3. Open browser to localhost:8080
4. When changes are made, refresh browser!
5. Type Instagram User's Profile into Input Field
6. Watch as the page change. User can upload their own pictures to preview the Layout!


### TODO
1. Improve UI Design
2. Convert to Redux
3. Improve Scraper
