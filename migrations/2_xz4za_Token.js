const Xz4zaToken = artifacts.require("./Xz4zaToken.sol");

module.exports = async (deployer) => {
	const tokenPrice = 1000;
    const totalSupply = 1000000;
    await deployer.deploy(Xz4zaToken, tokenPrice, totalSupply);
};