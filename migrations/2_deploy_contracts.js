const ConvertLib = artifacts.require("ConvertLib");
const DecentralizedArt = artifacts.require("DecentralizedArt");
const SimpleStorage = artifacts.require("SimpleStorage");
const letsMeet = artifacts.require("LetsMeet");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, DecentralizedArt);
  deployer.deploy(DecentralizedArt);
  deployer.deploy(SimpleStorage);
  deployer.deploy(letsMeet);
};
