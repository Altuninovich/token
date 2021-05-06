const Xz4zaToken = artifacts.require("./Xz4zaToken.sol");

module.exports = async (deployer) => {
	const tokenPrice = 10;
    const totalSupply = '10000000000000000';
    await deployer.deploy(Xz4zaToken, tokenPrice, totalSupply);
};