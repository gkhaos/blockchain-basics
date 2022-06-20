var Adoption = artifacts.require("./Adoption.sol");

module.exports = async function (deployer, network, accounts) {
    // const adoption = await deployer.deploy(Adoption);
    await deployer.deploy(Adoption);
    // const adoption = await Adoption.deployed();
    // await deployer.ens.setAddress("adoption.contract.whz", adoption, { from: accounts[0] });
};
