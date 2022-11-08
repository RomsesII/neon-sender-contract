var MyContract = artifacts.require("NeonSender");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};