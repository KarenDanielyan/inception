all: up configure_volumes

re: hard_down up

up: configure_volumes
	@echo "Lifting containers..."
	@docker-compose -f ./srcs/docker-compose.yml up -d --build
	@echo "!DONE!"

down:
	@echo "Dropping containers..."
	@docker-compose -f ./srcs/docker-compose.yml down
	@echo "!DONE!"

hard_down:
	@echo "Dropping containers and removing volumes..."
	@docker-compose -f ./srcs/docker-compose.yml down -v
	@echo "!DONE!"

start:
	@echo "Starting containers..."
	@docker-compose -f ./srcs/docker-compose.yml start
	@echo "!DONE!"

stop:
	@echo "Stopping containers..."
	docker-compose -f ./srcs/docker-compose.yml stop
	@echo "!DONE!"

configure_volumes:
	@mkdir -p /home/kdaniely/data/mariadb
	@mkdir -p /home/kdaniely/data/wordpress

remove_volumes:
	@rm -rf /home/kdaniely/data/mariadb
	@rm -rf /home/kdaniely/data/wordpress

.PHONY: all re start down hard_down up stop configure_volumes remove_volumes
