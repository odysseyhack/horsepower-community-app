pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Community is Ownable {
    using SafeMath for uint256;

    address private _vattContractAddress;
    mapping (address => uint256) userDiscount;
    VATTinCommunity vatToken;

    constructor(address vattContractAddress) public {
        _vattContractAddress = vattContractAddress;
        vatToken = VATTinCommunity(vattContractAddress);
    }

    function getNonTokenDebt() public view returns(uint256) {
        return userDiscount[msg.sender];
    }

    function updateVattContractAddress(address newAddress) public onlyOwner {
        _vattContractAddress = newAddress;
        vatToken = VATTinCommunity(_vattContractAddress);
    }

    function carRegisters(uint256 kwh) public onlyOwner {
        vatToken.updateCap(vatToken.cap().add(kwh));
    }

    function carUnregisters(uint256 kwh) public onlyOwner {
        vatToken.updateCap(vatToken.cap().sub(kwh));
    }

    // As VATT is a debt token, a charging by X means, X receives VATT
    function carCharges(address account, uint256 kwh) public onlyOwner {
        uint256 discount = userDiscount[account];
        if (discount > 0) {
            if (discount <= kwh) {
                userDiscount[account] = 0;
                vatToken.mint(account, kwh.sub(discount));
            } else {
                userDiscount[account] = discount.sub(kwh);
            }
        } else {
            vatToken.mint(account, kwh);
        }
    }

    function carDischarges(address account, uint256 kwh) public onlyOwner {
        uint256 currentBalance = vatToken.balanceOf(account);
        if (currentBalance > 0) {
            if (currentBalance <= kwh) {
                userDiscount[account] = userDiscount[account].add(kwh.sub(currentBalance));
                vatToken.burn(account, currentBalance);
            } else {
                vatToken.burn(account, kwh);
            }
        } else {
            userDiscount[account] = userDiscount[account].add(kwh);
        }
    }
}

contract VATTinCommunity {
    function cap() public view returns (uint256);
    function updateCap(uint256 newCap) public;
    function mint(address account, uint256 value) public returns(bool);
    function burn(address account, uint256 value) public;
    function balanceOf(address owner) public view returns (uint256);
}