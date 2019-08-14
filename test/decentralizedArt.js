const DecentralizedArt = artifacts.require("DecentralizedArt");

contract('DecentralizedArt', (accounts) => {
  it('should put 10000 DecentralizedArt funds in the first account', async () => {
    const decentralizedArtInstance = await DecentralizedArt.deployed();
    const balance = await decentralizedArtInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it('should call a function that depends on a linked library', async () => {
    const decentralizedArtInstance = await DecentralizedArt.deployed();
    const balance = (await decentralizedArtInstance.getBalance.call(accounts[0])).toNumber();
    const ethBalance = (await decentralizedArtInstance.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(ethBalance, 2 * balance, 'Library function returned unexpected function, linkage may be broken');
  });
  it('should send coin correctly', async () => {
    const decentralizedArtInstance = await DecentralizedArt.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await decentralizedArtInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await decentralizedArtInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await decentralizedArtInstance.sendCoin(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await decentralizedArtInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await decentralizedArtInstance.getBalance.call(accountTwo)).toNumber();


    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
