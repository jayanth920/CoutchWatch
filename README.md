# Project Overview


## CouchWatch :- Description

An app that lets you choose movies, and for the movies which are new it lets you go to the movie's official booking page.It also lets you go the official IMDB rating page. 

## Project Links

- [Github Repo](https://github.com/jayanth920/project-2)
- [Deployment](https://project-2-2b1ls4dk9-jayanth920.vercel.app/)
- [Demo Recording]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- WireFrames : [Page 1](https://user-images.githubusercontent.com/113549918/202493151-c8e40e12-67cf-4a23-97fb-9bf2d42680aa.jpg)<br>
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
- Hovering over movies sjould give a brief info about it.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header, include the nav | 
| Footer | This will render the footer, include links to github repo | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, Bootstrap, Tailwind CSS, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
