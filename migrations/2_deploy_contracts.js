var VATT = artifacts.require("./contracts/VATT.sol");
var Community = artifacts.require("./contracts/Community.sol");

module.exports = function(deployer) {
  deployer.deploy(VATT, 'Virtual AuTomobile Token', 'VATT', 3, 2000).then(function() {
    console.log(VATT.address);
    return deployer.deploy(Community, VATT.address);
  });  

  // Add the community contract as the minter
  let vatt, community;
  deployer.then(function() {
    return VATT.deployed();
  }).then(function(instance) {
    vatt = instance;
    return Community.deployed();
  }).then(function(instance) {
    community = instance;
    return vatt.addMinter(community.address);
  })
}
