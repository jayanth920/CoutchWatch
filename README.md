# Project Overview


## CouchWatch :- Description

An app that lets you choose movies, and for the movies which are new it lets you go to the movie's official booking page. It also lets you go the official IMDB rating page. 

## Project Links

- [Github Repo](https://github.com/jayanth920/project-2)
- [Deployment](https://project-2-2b1ls4dk9-jayanth920.vercel.app/)
- [Demo Recording]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- WireFrames : [Page 1](https://user-images.githubusercontent.com/113549918/202493151-c8e40e12-67cf-4a23-97fb-9bf2d42680aa.jpg)
	       [Page 2](https://user-images.githubusercontent.com/113549918/202493451-ed4ce579-e58c-469b-bcb4-df5825fb1ca0.jpg)
 
- [React Architecture](https://user-images.githubusercontent.com/113549918/202492865-9a4846c8-b58d-4a06-86ad-ee6930119612.jpg)


Define the the React components and the architectural design of your app.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the "client" will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api.
- Render data on page.
- Allow user to interact with the page.
- User must be able to click the movie cards.
- The movie page must have official bokking link and an IMDB link.
- Different Tabs such as trending/top-rated/upcoming.

#### PostMVP
- Slideshow in the main page.
- Hovering over movies should give a brief info about it.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull through import and include React Router.| 
| Header | This will render the header, including the nav bar, logo and tabs. | 
| Card | This will render each of the card design. | 
| MovieList | This will render the layout of the cards in a container on the homepage in rows. | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Header | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 1hr| 1hr | 2.5hrs |
| Adding Body with Movie Cards | H | 2 days| 2 days | 2 days |
| Movie Details Page | H | 1 day| 1 day | 1 day |

## Additional Libraries and Packages
 #### NPM PACKAGES:[[React-Router-Dom](https://www.npmjs.com/package/react-router-dom)] --- [[Axios](https://www.npmjs.com/package/react-axios)] --- [[React-Loading-Skeleton](https://www.npmjs.com/package/react-loading-skeleton)] --- [[React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)]


Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function Home() {
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR-1**: Not a React Dom child Element. (syntax error due to render keyword)                          
**RESOLUTION**: Corrected the code from render to return.
<br>
**ERROR-2**: {useEffect} not defined.                          
**RESOLUTION**: Had not imported the useEffect Hook.

