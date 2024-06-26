To run this repo:

**Step 1:**
Download Docker: https://www.docker.com/products/docker-desktop/

**Step 2:**
Open the Docker app, leaving it running in the background

**Step 3:**
Create a .env file in the root folder. Add these line to the file
```
DATABASE_URL="postgresql://dev_team:secret@localhost:5432/universal_book?schema=public"
NODE_ENV="development"
PORT=8080
```

**Step 4:**
Run ```make makefile all``` in terminal. Once finishing you should see a PostgreSQL container running in the Containers list in Docker. If encounter the error "Can't reach database server at ...", try these 2 commands one by one:
```
make docker
npx prisma db pull
```

