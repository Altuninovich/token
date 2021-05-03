const Xz4zaToken = artifacts.require("Xz4zaToken");

contract('Xz4zaToken', (accounts) => {
	let[alice, bob] = accounts;
    let tokenPrice;


	it('', async () => {
		const contractInstance = await Xz4zaToken.new();
		const result = await contractInstance.transfer(alice, 5);
		assert.equal(result.receipt.status, true);
	})
});

