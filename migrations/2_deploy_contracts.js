var VATT = artifacts.require("./contracts/VATT.sol");
var Community = artifacts.require("./contracts/Community.sol");

module.exports = function(deployer) {
  deployer.deploy(VATT, 'Virtual AuTomobile Token', 'VATT', 3, 2000).then(function() {
    return deployer.deploy(Community, VATT.address);
  });  
}
