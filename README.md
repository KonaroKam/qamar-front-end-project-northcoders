# Qamar's House of Games FRONT END (Northcoders Bootcamp)

## Welcome!

To the front-end follow up project after my back-end API project. that I wrote as part of my time at the Northcoders bootcamp.

Here are some links to my back-end repo, and the API itself:
https://github.com/KonaroKam/Qamar-s-Back-End-Project--Northcoders

https://qamar-back-end-project-nc-games.cyclic.app/api

This was hosted with Heroku originally but following the retirement of the free tiers that I needed at the end of November 2022, I migrated this back end to using ElephantSQL and Cyclic.

And here is the Netlify deployed link to my front-end:
https://qamar-front-end-project.netlify.app/

## Summary of project

This project creates the front end user interface for a game reviews API, allowing user friendly access to what was otherwise raw JSON data from the API.

For example, if you wanted to see all the reviews, they are part of the home page from the start and can then be filtered down (After you do the mandatory 'login').

The project was created using React and then I determined that I would use pure CSS for the design thereafter as opposed to using a framework so that I could solidify my understanding of things like flex and grid.


## Technical details

The aim was to write a project whilst utilising and implementing all that I have learnt as part of the front-end teaching.

As part of this I learned to use React and React-router-dom to allow for paths and conditional rendering therein.

I also learnt to better implement states, contexts, react hooks, optimistic and conditional rendering.

If you're interested in running this project on your local machine, keep reading. :)

Otherwise, thanks for reading :D

----------------------------

## Initial Setup

0. Read through this whole README first. An important step on any endeavour.

1. Start by ensuring you have cloned this repo on your local machine first (if you desire fork it first). 

2. Once you have done this, open the file in your preferred code editor

3. Open your terminal in your code editor (double check the current directory is the root of the clone you made of this repo) and get get node package manager installed if not already by running this command in it
``` bash
npm init -y
```
4. Now we need the packages I utilised. In the same terminal run this command to get everything installed on your local machine if it isn't already:
``` bash
npm install
```

----------------------------
## ! Minimum Versions !

## Node: 18.7.0
----------------------------

### Local Database Setup

To deploy this as I did, you can then either install netlify manually as follows: 
``` bash
npm install netlify-cli -g
``` 
``` bash
netlify deploy
``` 
And then build the app by running the following command:
``` bash
npm run build
```
Netlify may provide prompts to achieve the same result through their browser utility which can also be used.
