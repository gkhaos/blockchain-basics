// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Adoption {
    address[16] adopters;

    function adopt(uint8 petId) public returns (uint8) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }

    function getAdopter(uint8 petId) public view returns (address) {
        require(petId >= 0 && petId <= 15);

        return adopters[petId];
    }

    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}
