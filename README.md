# Blockchain Basics

Development environment for blockchain projects and some demo projects (so called Boxes from Truffle-Suite).

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [Docker](https://www.docker.com/get-started/) + [Docker-Compose](https://docs.docker.com/compose/install/)
- [VSCode](https://code.visualstudio.com/download) + [Remote-Containers-Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Browser (not IE) + [MetaMask-Plugin](https://metamask.io/)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Clone the github repository

    git clone https://github.com/gkhaos/blockchain-basics

Start VSCode and Open Development Container

To start the first project, navigate into the folder of the first project

    cd 01-react

Open up a second terminal.
With the first terminal, navigate into truffle and compile, test, and migrate the smart contracts

    cd truffle
    truffle compile
    truffle test
    truffle migrate


## Authors
  - **Manoel Kraus** - *Configured dev environment, selected boxes and planned tutorial* - [AIIS](https://aiis.fh-zwickau.de)

See also the list of
[contributors](https://github.com/gkhaos/blockchain-basics/contributors)
who participated in this project.

## License

This project is licensed under the [MIT](LICENSE.md) License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments
  - Hat tip to anyone whose code is used
  - Thanks to [PurpleBooth](https://github.com/PurpleBooth) for providing the README template
