pragma solidity >=0.4.25 <0.6.0;

contract ArtSaleToken {
  uint8 public constant decimals = 18;
  string public name = "ArtSale Token";
  string public symbol = "ARTS";
  string public standard = "ArtSale Token v1.0";
  uint256 public totalSupply;
  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  event Transfer(
    address indexed _from,
    address indexed _to,
    uint256 _value
  );

  event Approval(
     address indexed _owner,
     address indexed _spender,
     uint256 _value
  );

  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;

  constructor() public {
     balanceOf[msg.sender] = INITIAL_SUPPLY;
     totalSupply = INITIAL_SUPPLY;
  }

  function transfer(address _to, uint256 _value) public returns (bool success) {
    require(balanceOf[msg.sender] >= _value);

    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;

    emit Transfer(msg.sender, _to, _value);

    return true;
  }

  function approve(address _spender, uint256 _value) public returns (bool success) {
     allowance[msg.sender][_spender] = _value;

     emit Approval(msg.sender, _spender, _value);

     return true;
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
     require(_value <= balanceOf[_from]);
     require(_value <= allowance[_from][msg.sender]);

     balanceOf[_from] -= _value;
     balanceOf[_to] += _value;

     allowance[_from][msg.sender] -= _value;

     emit Transfer(_from, _to, _value);

     return true;
  }

}
