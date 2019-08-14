const ConvertLib = artifacts.require("ConvertLib");
const DecentralizedArt = artifacts.require("DecentralizedArt");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, DecentralizedArt);
  deployer.deploy(DecentralizedArt);
};
