.PHONY: install run

PNPM ?= pnpm

# Install dependencies with pnpm (default) or override with PNPM=... make install
install:
	$(PNPM) install

# Start the dev server, ensuring dependencies are installed first
run: install
	$(PNPM) dev
