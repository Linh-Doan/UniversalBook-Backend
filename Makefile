docker:
	docker-compose down
	docker-compose up -d

all:
	make docker
	sleep 3
	npx prisma db pull
	npx prisma generate
	npx prisma db seed