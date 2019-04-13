pragma solidity ^0.5.2;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract VATT is ERC20Detailed, ERC20Capped, Ownable {

    constructor(
        string memory name, 
        string memory symbol, 
        uint8 decimals,
        uint256 cap
    )
        ERC20Detailed(name, symbol, decimals) 
        ERC20Capped(cap)
        public
        onlyOwner 
    {
    }

    function updateCap(uint256 newCap)
        public
        onlyOwner
    {
        _cap = newCap;
    }
    
    /**
     * @param account the account to which the token needs to be transferred, sent by Community
     */
    function mint(address account, uint256 value) 
        public
        onlyOwner
        returns(bool)
    {
        super._mint(account, value);
    }
}