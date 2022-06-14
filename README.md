<div id="top"></div>

# Re-Capture

> A responsive, full stack MERN (MongoDB, Express, React, Node.js) journal application.

## Table of contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## About The Project

🌐 [Live Demo](https://antonio-re-capture.netlify.app/)


![screenshot](/re-capture-screenshot.png)

- Create, edit, and delete journal entries.
- Upload image or let a random inspiration image be uploaded for you.
- Express and Mongoose for server response and request.
- Redux and Redux Thunk for dispatching API calls.
- React Router for page navigation.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
- [Mongoose](https://mongoosejs.com/)
- [Mongo DB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these example steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Have installed the latest stable version of [node.js](https://nodejs.org/en/)
- Have a MongoDB account, create a cluster, and obtain the Mongo URI.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

Clone repository

```
git clone https://github.com/antonio-lopez/re-capture.git
```

Install dependencies

```
cd client
npm install

cd server
npm install
```

Create a `.env` file in the root of the `client` directory and fill in the environment variable.

```
REACT_DEVELOPMENT_URL=http://localhost:5000/api/v1

```

Create a `.env` file in the root of the `server` directory and fill in these environment variables with your custom `Mongo URI`. For the `JWT_SECRET` you can place any secret key you wish to use. The `JWT_LIFETIME` variable is the allowed time the user can stayed logged in.

```
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=

```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

```
cd server
npm start
```

```
cd client
npm start
```

<p align="right">(<a href="#top">back to top</a>)</p>


## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)

<p align="right">(<a href="#top">back to top</a>)</p>
