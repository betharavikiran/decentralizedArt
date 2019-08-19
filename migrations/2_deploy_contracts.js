const ConvertLib = artifacts.require("ConvertLib");
const DecentralizedArt = artifacts.require("DecentralizedArt");
const SimpleStorage = artifacts.require("SimpleStorage");
const letsMeet = artifacts.require("LetsMeet");
const ArtSaleToken = artifacts.require("ArtSaleToken");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, DecentralizedArt);
  deployer.deploy(DecentralizedArt);
  deployer.deploy(SimpleStorage);
  deployer.deploy(letsMeet);
  deployer.deploy(ArtSaleToken);
};
