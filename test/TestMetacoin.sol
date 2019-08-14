pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DecentralizedArt.sol";

contract TestDecentralizedArt {

  function testInitialBalanceUsingDeployedContract() public {
    DecentralizedArt meta = DecentralizedArt(DeployedAddresses.DecentralizedArt());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 DecentralizedArt initially");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    DecentralizedArt meta = new DecentralizedArt();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 DecentralizedArt initially");
  }

}
