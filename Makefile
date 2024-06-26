docker:
	docker-compose down
	docker-compose up -d

all:
	make docker
	sleep 1
	npx prisma db pull