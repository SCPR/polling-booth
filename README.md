# polling-booth
Simple polls backed by google sheets.

[demo here](https://scpr.github.io/polling-booth/demo.html)

**This is completely not a secure way to do polling, but it's quick, easy, and doesn't require a database table.**

## requirements

* google sheets
* jquery
* chartjs


## how to use

1. Create a blank google sheet which will hold your results. The rows will correspond to each poll question while the columns will correspond to the choices.
1. Open up the script editor in google sheets with `Tools` > `Script Editor`
1. Clear out the boilerplate script in the script editor and copy/paste everything from [appScript.js](appScript.js)
1. Save the script, then go to `Run` > select `setup`
1. You'll be prompted to grant authorization to the script so agree to that.
1. Go to `Publish` > `Deploy as web app`
1. **Important:** Change "Who has access to the app:" to "Anyone, even anonymous".
1. Click `Deploy`
1. You'll be presented with a URL for the web app. Copy that.
1. Paste the above URL into the `APP_URL` variable of [demo.html](demo.html)
1. Close the script editor now and go back to your google sheet.
1. Get the google sheet key (from the URL) and paste it into the `SHEET_ID` variable.
1. You can create polls by changing the values in the `pollContent` variable of [demo.html](demo.html):
    ```
    var pollContent = [
              {
                question: 'Dogs or cats?',
                choices: [
                  'dog',
                  'cat'
                ]
              },
              {
                question: 'Cake, pie, or ice cream?',
                choices: [
                  'cake',
                  'pie',
                  'ice cream'
                ]
              },
              { question: 'Do you like the Oxford comma?',
                choices: [
                  "Yes, I'm pretentious",
                  "Is that a soccer team?"
                ]
              }
            ];
    ```
1. The rest of the javascript in [demo.html](demo.html) deals with building the poll HTML programatically as well as fetching the results and feeding it into chart.js


## credits
Credit goes to these two tutorials which sparked this idea:
https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
https://medium.com/dali-lab/google-sheets-and-json-easy-backend-e29e9ef3df2
