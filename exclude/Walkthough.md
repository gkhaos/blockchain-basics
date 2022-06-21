# Walkthough
## STEP 0
- Start browser
- Configure MetaMask

- Start environment
- truffle version
    - Truffle, Ganache, Solidity, Node, Web3.js
- BlockScout on http://localhost:4000

## Boxes
- react
- pet-shop
- metacoin

### 01-react
Simple demo to see that everything is up and running

### 02-pet-shop
Development goal: Smart Contract for Adoption

Preamble:
- 16 Pets
- Target: Website with nice little puppies that we can adopt by clicking an adopt button :)

Intended structure:
- id=index -> list of adopters(adopter? -> account -> address)
- function adopt(petId) adopt pet if pet exists
- function getAdopter(petId) returns adopter of pet
- function getAdopters(void) returns list of adopters

- [Variable Setup](https://trufflesuite.com/tutorial/#variable-setup)

### 03-metacoin
Verify with library  
Read-Tab AND Write-Tab contain `sendCoin`, Why? ;)  

## Notes

Migrate:
```console
truffle migrate
poa-solidity-flattener contract/Contract.sol # --> out/Contract_flat.sol
# manually copy TRIMMED content
# if using library, add library
# Verify contract
# Connect wallet
```

