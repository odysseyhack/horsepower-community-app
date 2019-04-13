const { writeFileSync, readFileSync } = require('fs')

const CryptoCardsDappChain = artifacts.require('CryptoCardsDappChain')
const GameTokenDappChain = artifacts.require('GameTokenDappChain')

module.exports = (deployer, network, accounts) => {
  const gatewayAddress = readFileSync('../gateway_dappchain_address', 'utf-8')

  deployer.deploy(CryptoCardsDappChain, gatewayAddress).then(async () => {
    const cryptoCardsDAppChainInstance = await CryptoCardsDappChain.deployed()
    console.log(`CryptoCardsDAppChain deployed at address: ${cryptoCardsDAppChainInstance.address}`)
    writeFileSync('../crypto_cards_dappchain_address', cryptoCardsDAppChainInstance.address)
  })

  deployer.deploy(GameTokenDappChain, gatewayAddress).then(async () => {
    const GameTokenDappChainInstance = await GameTokenDappChain.deployed()
    console.log(`GameTokenDappChain deployed at address: ${GameTokenDappChainInstance.address}`)
    writeFileSync('../game_token_dappchain_address', GameTokenDappChainInstance.address)
  })
}
