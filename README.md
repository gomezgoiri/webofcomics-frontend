# webofcomics-frontend
React based frontend for the "Web of comics"<sup>[1](#nameWarning)</sup> webapp.

<a name="nameWarning">[1]</a> I will probably find a better name for this in the future ;-)

## Configuration

Set an environment variable called _REACT_APP_HTTP_API=_ pointing to the base URL of the HTTP API.

You can do this by creating a file called _.env_ which contains something like:

    REACT_APP_HTTP_API='http://localhost:5000'

## Run on development mode

    yarn install # if necessary
    yarn start


## Production version

To create the production-ready static files of the frontend run:

    yarn build

If [Docker](https://www.docker.com/) is detected, this command will also create an image with an static web server and the build files.
To run a container of this image, simply run:

    yarn deploy
