/* eslint-disable func-names */
import Web3 from 'web3';

const connectMetamask = async () => {
  // Modern DApp Browsers
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      // User has allowed account access to DApp...
      console.log('Permission granted');
      return { web3, accounts: window.web3.eth.accounts };
    } catch (e) {
      // User has denied account access to DApp...
      console.log('Permission denied');
      return null;
    }
  }
  // Legacy DApp Browsers
  else if (window.web3) {
    return new Web3(window.web3.currentProvider);
  }
  // Non-DApp Browsers
  else {
    console.log('You have to install MetaMask !');
  }
  return null;
};

export default connectMetamask;

// const getWeb3 = new Promise(function(resolve, reject) {
//   // Wait for loading completion before loading web3, to be sure it's
//   // already injected
//   window.addEventListener('load', function() {
//     let results;
//     let web3 = window.web3;
//     // Checking if Web3 has been injected by the browser MetaMask
//     if (typeof web3 !== 'undefined') {
//       // Use MetaMask's provider.
//       web3 = new Web3(web3.currentProvider);

//       results = {
//         web3,
//       };
//       console.log('Injected web3 detected.');
//       resolve(results);
//     } else {
//       // If no web3 is detected, then the local web3 provider is loaded.
//       let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
//       web3 = new Web3(provider);
//       results = {
//         web3,
//       };
//       console.log('No web3 instance injected, using Local web3.');
//       resolve(results);
//     }
//   });
// });

// export default getWeb3;
