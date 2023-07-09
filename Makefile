.PHONY : build clean run

build: src/App.tsx
	@echo "Building..."
	@yarn run build

run:
	@serve -s dist &
	@sleep 2
	@python3 -m webbrowser http://localhost:3000

clean:
	@echo "Cleaning..."
	@rm -rf dist
