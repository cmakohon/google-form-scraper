# Google Form Scraper
Ever tried embedding a google form into your webpage? It's not pretty. If you're like me, you've probably tried digging through your Google Form's overly-complicated HTML just to find the input elements and their name attributes. This tool was created to automate that process and return a simple form with its corresponding input elements.

## Live application
The link for this application can be found [here](https://guarded-retreat-72767.herokuapp.com/), but feel free to fork this project and improve upon it.

## How to use
Head over to your google form and copy the form id from the URL and paste it into the main input field.

For example, if your url is:
```
https://docs.google.com/forms/d/e/1FAIpQLaeKEfLJRA8bn_qUyMaTRsh7gtOmqf2fLx4g8p99RrtzOT-aVw/viewform
```

Then your id would be:
```
1FAIpQLaeKEfLJRA8bn_qUyMaTRsh7gtOmqf2fLx4g8p99RrtzOT-aVw
```

## Run locally
After cloning the project, run the following commands from the root directory:

```
npm install
npm start
```

After these commands finish, your server should be up and running on port **5000**. Run the following commands to get the client running on port **3000**.

```
cd client
npm install
npm start
```

## Contributions
- I'd like to thank [@peduarte](https://github.com/peduarte/google-form-scraper/) for some of his code for the backend of this application. I got the idea to use cheeriojs from his app, and he had a concise way of dealing with the CORS issues that I was facing.
- This article from [Ladies Learning Code](https://codepen.io/learningcode/post/customize-a-google-form-for-your-website) was a great resource for determining which pieces of the Google Form to scrape.
