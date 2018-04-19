const express = require('express');
const path = require('path');
const cors = require('cors');
const cheerio = require('cheerio');
const request = require('request');

const app = express();

const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d/e/';
const VIEW_FORM = '/viewform';

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

function scrapeForm(formId, callBack) {
  request(GOOGLE_FORMS_URL + formId + VIEW_FORM, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      let formInputs = [];
      let foundEntries = [];

      $('input, textarea').map((i, el) => {
        if(el.attribs.name && el.attribs.name.includes("entry.") && !el.attribs.name.includes("_sentinel")) {
          if(!foundEntries.includes(el.attribs.name)) {
            foundEntries.push(el.attribs.name);
            formInputs.push({
              id: i,
              type: el.name,
              name: el.attribs.name
            })
          }
        }
      });

      let formAction = $('form').attr('action');

      let formResponse = {
        formAction: formAction,
        formInputs: formInputs
      };

      console.log(formResponse);

      callBack(formResponse);
    }
  });
}

// Put all API endpoints under '/api'
app.get('/api/scrapeGoogleForm', (req, res) => {
  console.log(`Hit /api/scrapeGoogleForm endpoint`);
  if (req.query.formId) {
    console.log(req.query.formId);
    scrapeForm(req.query.formId, function(data) {
      res.json(data);
    });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Google Form Scraper server listening on ${port}`);