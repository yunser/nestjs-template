FROM node:16.13

EXPOSE 3000

WORKDIR /app
ADD . /app

CMD ["node", "dist/main"]
