var VATT = artifacts.require("./contracts/VATT.sol");

module.exports = function(deployer) {
  deployer.deploy(VATT, 'Virtual AuTomobile Token', 'VATT', 3, 2000);
}
