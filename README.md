# Blockchain Basics

Development environment for blockchain projects and some demo projects (so called [Truffle Boxes](https://trufflesuite.com/boxes/)) using [Truffle Suite](https://trufflesuite.com/).

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

__If using Docker Desktop and working (or having symlinks to) outside of `/home`__, open Docker Desktop and go to Settings, Resources, File Sharing and add the path to the local repository to the shared paths.

Start VSCode and Open Development Container (in VSCode, hit F1 and then run the command)

    >Remote-Containers: Reopen in Container

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
