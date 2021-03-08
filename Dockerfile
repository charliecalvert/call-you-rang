FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY call-you-rang/package.json .
RUN npm install
COPY call-you-rang .
RUN echo "alias ll='ls -laF'" >> ~/.bashrc
#COPY GitIgnoreTester patterns.txt isit320-calvert-2019/
EXPOSE 30025
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]
