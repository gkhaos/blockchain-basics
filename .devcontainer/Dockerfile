FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-20.04

USER root
RUN echo "Acquire::Check-Valid-Until \"false\";\nAcquire::Check-Date \"false\";" | cat > /etc/apt/apt.conf.d/10no--check-valid-until
RUN apt-get -y update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs
RUN npm install -g babel-runtime
RUN npm install -g truffle
RUN npm install -g @openzeppelin/contracts
RUN npm install -g @poanet/solidity-flattener

USER vscode
WORKDIR /home/app
