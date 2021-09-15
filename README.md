# personal-spa

A single-page personal website application built using React and Django. Capstone assessment of HarvardX's [Web Programming with Python and JavaScript](https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript) course. 


## Distinctiveness and Complexity
The most distinctive features of my final project, compared to the previous four assignments, is the use of React as a frontend framework. Instead of having Django serving HTML, here it is configured to operate purely as an API (using the Django REST Framework), as would be expected in a single-page application.

Creating a project with this structure was considerably more complex than previous assignments; CORS needed to be set up, multiple APIs needed to be built to serve all the required data, and more JavaScript was needed to create interestings and reactive UI elements. The CSS is much more complicated than in previous efforts, with a greater number of media queries being used to create a responsive design that looks good on many different screen sizes.


## Running the App

First, clone the repository:
```
git clone https://github.com/calumbell/cs50w-personal-spa
cd cs50w-personal-spa
```

### Setting up the Backend

Navigate to the backend directory:
```
cd backend
```

Create a Python virtual environment to install dependancies:
```
python3 -m venv venv
```

On Unix or Mac, run:
```
source venv/bin/activate
```

To activate the virtual environment on Windows, run:
```
venv\Scripts\activate.bat
```


Install dependencies:
```
pip3 install -r requirements.txt
```

Django requires a secret key, make you add one to your bash profile:
```
SECRET_KEY="your-secret-key-goes-here"
export SECRET_KEY 
```

You can generate a random secret key by running:
```
python3 -c "import secrets; print(secrets.token_urlsafe())"
```

To run the development server:
```
python3 manage.py runserver
```

### Setting up the Frontend

Navigate to the Frontend directory:
```
cd ../frontend
```

Install dependencies: 

```
npm install
```

Run the development server:
```
yarn start
```


## Files

```
cs50w-personal-spa
│   README.md                       # You are here
│
└───backend                         # Backend Directory
│   │
│   └───blog_api                    # App: api for fetching blog posts
│   │   │  
│   │   │  models.py                # BlogPost/Category model
│   │   │  serializers.py           # BlogPost/Category serializer
│   │   │  urls.py                  # Define routes for querying blog API
│   │   │  views.py                 # Handle req/res to blog_api
│   │   │  ...
│   │
│   └───personal                    # Django Project
│   │   │   
│   │   │  settings.py              # Project settings
│   │   │  urls.py                  # Routing to various APIs
│   │   │  ...
│   │
│   └───projects_api                # App: api for fetching project details
│   │   │  
│   │   │  models.py                # Project model
│   │   │  serializers.py           # Project serializer
│   │   │  urls.py                  # Define routes for querying project API
│   │   │  views.py                 # Handle req/res to projects_api
│   │   │  ...
│   │
│   └───resume_api                  # App: api for fetching 
│   │   │  
│   │   │  models.py                # Models for various Resume items
│   │   │  serializers.py           # Serializers for said items
│   │   │  urls.py                  # Define routes for querying resume API
│   │   │  views.py                 # Handle req/res to resume_api
│   │   │  ...
│
└───frontend                        # Frontend Directory
│   │
│   └───public
│   │   │ 
│   │   │  index.html               # App entry point
│   │   │  ...
│   │
│   └───src                         # Frontend source code
│   │   │ 
│   │   │  App.js                   # React app, contains routing
│   │   │  Constants.js             # Constants used throughout application
│   │   │  index.js                 # js entry point
│   │   │
│   │   └───components              # dir for React components 
│   │   │   │
│   │   │   │  BlogPost.js          # Cmp. for displaying blog post
│   │   │   │  Card.js              # Card used throughout site
│   │   │   │  ContentSection.js    # Cmp. for containing section contents 
│   │   │   │  HeroSection.js       # Component for Hero section
│   │   │   │  LinkIcons.js         # Social media link icons component
│   │   │   │  NavBar.js            # Navigation component
│   │   │   │  SplitCard.js         # Card w/ 2 cols
│   │   │   │
│   │   │   └───styles              # Stylesheets for each component
│   │   │   │   │  ...
│   │   │ 
│   │   └───images                  # Various imgs/icons used throughout site
│   │   │   │  ...
│   │   │ 
│   │   └───pages                   # Components for each page of SPA
│   │   │   │
│   │   │   │  Blog.js              # component for page at route '/blog/'
│   │   │   │  Contact.js           # component for page at route '/contact/'
│   │   │   │  Home.js              # component for page at route '/'
│   │   │   │  Projects.js          # component for page at route '/projects/'
│   │   │   │  Resume.js            # component for page at route '/resume/'
│   │   │   │
│   │   │   └───styles              # stylesheets for each page
│   │   │   │   │  ...
│   │   │ 
│   │   └───styles                  # project-wide styles
│   │   │   │ 
│   │   │   │  App.css              # app-wide css, includes variables
│   │   │   │  layout.css           # stylesheet for responsive layouts
│   │   │   │  typography.css       # stylesheet for responsive typography
│   │   │
│   │ 
│
```