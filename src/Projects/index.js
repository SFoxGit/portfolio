const Projects = [
  {
    name: "Bane of Olympus",
    description: "This was a group project, I was the project manager and handled backend and programming.Developing the logic behind the game was a ton of fun.",
    image: "./images/booFight.jpg",
    github: "https://github.com/SFoxGit/bane-of-olympus",
    deployed: "https://baneofolympus.herokuapp.com/",
    categories: ["backEnd", "frontEnd", "api", "group"]
  },
  {
    name: "Restaurants Near Me",
    description: "Group project with the goal of using API's to create a useful webapp. I worked extremely hard on the programming of this, there were a lot of learning pains along the way but I am very proud of the functionality of this. I envision expanding it more in a social media direction than a yelp direction (Think restaurant roulette or even what instagram foodies do but without filling up non foodies feeds).",
    image: "../../images/projectdisplay.jpg",
    github: "https://github.com/SFoxGit/Restaurants-Near-Me",
    deployed: "https://scashmore.github.io/Restaurants-Near-Me/",
    categories: ["frontEnd", "api", "group"]
  },
  {
    name: "Weather Dashboard",
    description: "The goal of this was to create a weather webapp using openweathermap api and moment. It certainly displays my preference for backend developement instead of frontend!",
    image: "../../images/weatherdashboard2.jpg",
    github: "https://github.com/SFoxGit/weather_search",
    deployed: "https://sfoxgit.github.io/weather_search/",
    categories: ["frontEnd", "api"]
  },
  {
    name: "Horiseon Refactor",
    description: "Made existing code SEO, and refactor to make code more efficient",
    image: "../../images/horiseon.jpg",
    github: "https://github.com/SFoxGit/horiseon_refactor",
    deployed: "https://sfoxgit.github.io/horiseon_refactor/",
    categories: ["frontEnd"]
  },
  {
    name: "Password Generator",
    description: "Use existing html/css and generate passwords for users based on their inputs from alert prompts",
    image: "../../images/passwordGenerator.jpg",
    github: "https://github.com/SFoxGit/password_generator",
    deployed: "https://sfoxgit.github.io/password_generator/",
    categories: ["frontEnd"]
  },
  {
    name: "Daily Planner",
    description: "Given html/css, created javascript to save information to local storage and populate data on page reload. Also uses moment to change the background based on local time",
    image: "../../images/dailyplanner.jpg",
    github: "https://github.com/SFoxGit/Daily_Planner_jQuery",
    deployed: "https://sfoxgit.github.io/Daily_Planner_jQuery/",
    categories: ["frontEnd"]
  },
  {
    name: "README Generator",
    description: "Using nodejs with inquirer, prompts the user with questions. Upon completetion it will create a file and write all the necessary information for a great README from the prompts.",
    image: "../../images/readmeGen.jpg",
    github: "https://github.com/SFoxGit/README_Generator",
    deployed: "https://drive.google.com/file/d/1fj0_4FZxQqtxBiJlshtnN5XEoDJXzYau/view",
    categories: ["backEnd"]
  },
  {
    name: "Team Profile Generator",
    description: "Using inquirer to prompt the user, and jest to test. This app will prompt the user to create a team and fill in the required information for each team member. Upon completetion it will create an HTML page for the team",
    image: "../../images/teamProfile.jpg",
    github: "https://github.com/SFoxGit/Team_Profile_Generator",
    deployed: "https://drive.google.com/file/d/1kBk7dlrSnEdYkOIyzM2uV3UwfyIvK6Ra/view",
    categories: ["backEnd"]
  },
  {
    name: "Hottest Restaurant",
    description: "Group project using Node and Express with vanilla javascript to create a table reservation system.",
    image: "../../images/hottestRest.jpg",
    github: "https://github.com/SFoxGit/HottestRestaurant",
    deployed: "https://dry-bayou-00961.herokuapp.com/",
    categories: ["backEnd", "group"]
  },
  {
    name: "Note Taker",
    description: "Create backend code to make a functioning note taking app",
    image: "../../images/noteTaker.jpg",
    github: "https://github.com/SFoxGit/note_taker",
    deployed: "https://safe-cove-81792.herokuapp.com/notes",
    categories: ["backEnd"]
  },
  {
    name: "Employee Tracker",
    description: "Content Management System using Node, Inquirer, and MySQL",
    image: "../../images/employeeTracker.jpg",
    github: "https://github.com/SFoxGit/employee_tracker",
    deployed: "https://drive.google.com/file/d/1-NKI3OxIf3WTRtijNg8kD5EgdAYJ0_8L/view",
    categories: ["backEnd", "API"]
  },
  {
    name: "Code Quiz",
    description: "Using javascript to create a timer based quiz that calculates your score via time remaining. A wrong answer reduces your time. High scores are saved to local storage. This was my first interaction with local storage.",
    image: "../../images/codeQuiz.jpg",
    github: "https://github.com/SFoxGit/code_quiz",
    deployed: "https://sfoxgit.github.io/code_quiz/",
    categories: ["frontEnd"]
  },
  {
    name: "Ecommerce back end",
    description: "Back end for an e-commerce site by modifying starter code using Express.js API with Sequelize to interact with MySQL. The key to this was being able to create all the CRUD routes and execute them in postman (I hear new VSCode will make postman obsolete ooo!)",
    image: "../../images/getCategories.gif",
    github: "https://github.com/SFoxGit/back_end_via_mysql",
    deployed: "../../images/getCategories.gif",
    categories: ["backEnd", "API"]
  },
  {
    name: "Original Portfolio",
    description: "My portfolio before learning React",
    image: "../../images/firstPortfolio.jpg",
    github: "https://github.com/SFoxGit/shawn_fox_portfolio",
    deployed: "https://sfoxgit.github.io/shawn_fox_portfolio/",
    categories: ["frontEnd"]
  },
  {
    name: "MechDog TechBlog",
    description: "Using handlebars to create a frontend, with an express sequelize backend. This was an impossibly difficult assignment given the very short timeframe given. My original submission was A quality, but I took this as a personal challenge to truly make this a great blog site. I may not be the most creative designer (give me a great UI/UX team and we'll be unstoppable) but I do find this to be a good looking page with GREAT functionality. I really learned to do some unique routing during this.",
    image: "../../images/mechDog.jpg",
    github: "https://github.com/SFoxGit/MechDog_TechBlog",
    deployed: "https://blooming-island-18457.herokuapp.com/",
    categories: ["frontEnd", "backEnd", "API"]
  },
  {
    name: "Working It Out",
    description: "Created a back end for an existing front end that allows the user to save exercises into a mongo db. The frontend also requires the db return modified information in order to present exercises in a graph.",
    image: "../../images/stats.jpg",
    github: "https://github.com/SFoxGit/working_it_out",
    deployed: "https://working-it-out-001.herokuapp.com",
    categories: ["backEnd", "API"]
  },
  {
    name: "Direct Dedicated Directory",
    description: "Using React to dynamically create an employee table that is fetched from an API that generates random users. Thanks to react you can also sort or filter this table. My first real expedition into React and I loved it!",
    image: "../../images/desktopView.gif",
    github: "https://github.com/SFoxGit/direct-dedicated-directory",
    deployed: "https://sfoxgit.github.io/direct-dedicated-directory/",
    categories: ["frontEnd", "backEnd", "API", "React"]
  },
  {
    name: "Ghastly Grin",
    description: "Final group project of my cohort. I set the rest of my team on the task of making our project look beautiful, while I made it functional. I wanted this to be a fully functioning multiplayer game, I always loved playing Cards Against Humanity with my friends but now we live hundreds of miles away from each other. Now that I am a web developer distance means nothing. So I created a server and a database. Brought in the CaH base set, and created some of my own. Connected the backend and frontend, used short polling for the lobby and then timers based on row creation in MySQL (seemed like a clever solution). A ton of routes later, we had a game. Now it's just making it more effecient and adding more features! I'm so incredibly proud of this project.",
    image: "../../images/homePage.png",
    github: "https://github.com/SFoxGit/Ghastly-Grin",
    deployed: "https://github.com/SFoxGit/Ghastly-Grin/blob/main",
    categories: ["backEnd", "frontEnd", "API", "React", "group"]
  },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   github: "",
  //   deployed: "",
  //   categories: []
  // },
]

export default Projects;