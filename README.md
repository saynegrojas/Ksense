This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started


To get started with this application, follow these steps:

1. Clone the repository: `git clone [Github Repo URL]`
2. Install dependencies: `npm install`
3. Start the application: `npm run start`
4. Create an .env file.
5. Install localtunnel: `npm install -g localtunnel`
1. Start localtunnel specifying the port `lt --port [PORT]` (Make to expose your local tunnel by verifying the password)

First, run the development server:

```bash
npm run dev

```

## Features

* Handles webhook requests and returns a reponse
* Includes error handling middleware to catch and handle errors globally

## Usage

To use this application, send a POST request to your tunnel `[http://tunnel-name.loca.lt]` endpoint with your data in the request body. The application will return a response if the request is successful.

## Error Handling

The application includes error handling middleware to catch and handle errors globally. If an error occurs, the application will return an error message with the error details.
