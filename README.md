## Run the tests
Requirements:
- node.js
- cypress

In order to run the tests you must be on the root folder for this project and run the command `npx cypress run`.

## Assumptions
For the tests I am assuming that:
- The book titles will not change as the browser should be in portuguese;
- The locators for `isbn_description`, `book_dimensions` and `book_pages` will not move from the current indexed positions;
- Given the two points above, I would suggest to add data-tests to the elements above so that the test will be less prone to error;
- As this is a test repository, the names of the files are `scenarioX`, but these should be more explicit.

## Results
- Given this is an example I've recorded the videos for the current tests, that are available under `videos` folder. Nonetheless, the best practise to keep the code clean in a working repository would be to add these to the gitignore file.
- It should also be a good practise to implement a CI/CD tool to get the results and add a report so that it is easy to see the results and to communicate them to the team.