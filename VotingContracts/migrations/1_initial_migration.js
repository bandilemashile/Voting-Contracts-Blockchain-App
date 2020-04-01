var Migrations = artifacts.require("./Migrations.sol");
var Voter = artifacts.require("./Voter.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Voter);
};
