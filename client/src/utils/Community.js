import Community from '../contracts/Community.json';

const carRegisters = async (web3, account, kwh) => {
  const networkId = await web3.eth.net.getId();
  const contract = new web3.eth.Contract(
    Community.abi,
    Community.networks[networkId].address
  );

  // Registering a car triggers the capacity adjustment
  await contract.methods.carRegisters(kwh).send({ from: account });
};

export default carRegisters;