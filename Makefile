# Makefile para CogniCare Landing Page

# Variáveis
DOCKER_IMAGE = cognicare-site
DOCKER_TAG = latest
CONTAINER_NAME = cognicare-container
PORT = 3000

# Comandos de build
.PHONY: build
build:
	@echo "🔨 Construindo imagem Docker..."
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) .

.PHONY: build-no-cache
build-no-cache:
	@echo "🔨 Construindo imagem Docker sem cache..."
	docker build --no-cache -t $(DOCKER_IMAGE):$(DOCKER_TAG) .

# Comandos de execução
.PHONY: run
run:
	@echo "🚀 Executando container..."
	docker run -d --name $(CONTAINER_NAME) -p $(PORT):$(PORT) $(DOCKER_IMAGE):$(DOCKER_TAG)

.PHONY: run-interactive
run-interactive:
	@echo "🚀 Executando container em modo interativo..."
	docker run -it --rm --name $(CONTAINER_NAME) -p $(PORT):$(PORT) $(DOCKER_IMAGE):$(DOCKER_TAG)

.PHONY: run-dev
run-dev:
	@echo "🚀 Executando em modo desenvolvimento..."
	docker run -it --rm --name $(CONTAINER_NAME)-dev -p $(PORT):$(PORT) -v $(shell pwd):/app $(DOCKER_IMAGE):$(DOCKER_TAG)

# Docker Compose
.PHONY: up
up:
	@echo "🚀 Iniciando serviços com Docker Compose..."
	docker-compose up -d

.PHONY: down
down:
	@echo "🛑 Parando serviços..."
	docker-compose down

.PHONY: logs
logs:
	@echo "📋 Visualizando logs..."
	docker-compose logs -f

# Comandos de limpeza
.PHONY: stop
stop:
	@echo "🛑 Parando container..."
	docker stop $(CONTAINER_NAME) || true

.PHONY: remove
remove: stop
	@echo "🗑️  Removendo container..."
	docker rm $(CONTAINER_NAME) || true

.PHONY: clean
clean: remove
	@echo "🧹 Removendo imagem..."
	docker rmi $(DOCKER_IMAGE):$(DOCKER_TAG) || true

.PHONY: clean-all
clean-all:
	@echo "🧹 Limpeza completa..."
	docker system prune -f
	docker volume prune -f

# Comandos de desenvolvimento
.PHONY: install
install:
	@echo "📦 Instalando dependências..."
	npm install

.PHONY: start
start:
	@echo "🚀 Iniciando em modo desenvolvimento..."
	npm start

.PHONY: build-react
build-react:
	@echo "🔨 Construindo aplicação React..."
	npm run build

# Comandos de teste
.PHONY: test
test:
	@echo "🧪 Executando testes..."
	npm test

.PHONY: health-check
health-check:
	@echo "🏥 Verificando saúde do container..."
	curl -f http://localhost:$(PORT)/health || echo "❌ Health check falhou"

# Comandos de utilidade
.PHONY: shell
shell:
	@echo "🐚 Abrindo shell no container..."
	docker exec -it $(CONTAINER_NAME) /bin/sh

.PHONY: inspect
inspect:
	@echo "🔍 Inspecionando container..."
	docker inspect $(CONTAINER_NAME)

.PHONY: stats
stats:
	@echo "📊 Estatísticas do container..."
	docker stats $(CONTAINER_NAME)

# Help
.PHONY: help
help:
	@echo "🆘 Comandos disponíveis:"
	@echo "  build           - Constrói a imagem Docker"
	@echo "  build-no-cache  - Constrói sem usar cache"
	@echo "  run             - Executa o container em background"
	@echo "  run-interactive - Executa em modo interativo"
	@echo "  run-dev         - Executa em modo desenvolvimento"
	@echo "  up              - Inicia com Docker Compose"
	@echo "  down            - Para os serviços"
	@echo "  logs            - Visualiza logs"
	@echo "  stop            - Para o container"
	@echo "  remove          - Remove o container"
	@echo "  clean           - Limpa container e imagem"
	@echo "  clean-all       - Limpeza completa do Docker"
	@echo "  install         - Instala dependências npm"
	@echo "  start           - Inicia modo desenvolvimento"
	@echo "  build-react     - Constrói aplicação React"
	@echo "  test            - Executa testes"
	@echo "  health-check    - Verifica saúde do container"
	@echo "  shell           - Abre shell no container"
	@echo "  inspect         - Inspeciona container"
	@echo "  stats           - Mostra estatísticas"
