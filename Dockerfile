FROM oven/bun:1.3.14-debian

RUN apt-get update \
	&& apt-get install -y --no-install-recommends git ca-certificates curl unzip bash zsh \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

COPY package.json bun.lock* ./
COPY roblox-ts-sandbox/package.json roblox-ts-sandbox/package.json
RUN bun install --frozen-lockfile || bun install

COPY . .

CMD ["bun", "run", "check"]
