# Test web-app to use with Pluralsight courses and Docker Deep Dive book
# Linux x64
# star twith the alpine image
FROM alpine

# add the following email as the maintainer
LABEL maintainer="nigelpoulton@hotmail.com"

# Install Node and NPM using alpine package manager ( apk )
RUN apk add --update nodejs nodejs-npm

# Copy app to /src ( from build contenxt
COPY . /src

# set the working directory for rest of instructions in the file ( relative to the image ) 
WORKDIR /src

# Install dependencies
RUN  npm install

# document the apps working net port ( added as metadata layer ) 
EXPOSE 8080

# set app.js as the default app to run
ENTRYPOINT ["node", "./app.js"]
