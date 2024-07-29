// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Faucet {
    address public owner;
    mapping(address => bool) public allowedAddresses;
    mapping(address => uint) public lastWithdrawalTime;
    uint public withdrawalDelay; 
    uint public withdrawalAmount;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(uint _withdrawalDelay, uint _withdrawalAmount) {
        owner = msg.sender;
        withdrawalDelay = _withdrawalDelay;
        withdrawalAmount = _withdrawalAmount;
    }

    receive() external payable {}

    function deposit() external payable {}

    function withdraw(address payable _to) external onlyOwner {
        (bool canWithdrawResult, string memory reason, ) = canWithdraw(_to);
        require(canWithdrawResult, reason);
        require(address(this).balance >= withdrawalAmount, "Insufficient balance in faucet");
        _to.transfer(withdrawalAmount);
        lastWithdrawalTime[_to] = block.timestamp;
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    function addAddress(address _address) external onlyOwner {
        allowedAddresses[_address] = true;
    }

    function isAddressAllowed(address _address) external view returns (bool) {
        return allowedAddresses[_address];
    }

    function setWithdrawalDelay(uint _withdrawalDelay) external onlyOwner {
        withdrawalDelay = _withdrawalDelay;
    }

    function setWithdrawalAmount(uint _withdrawalAmount) external onlyOwner {
        withdrawalAmount = _withdrawalAmount;
    }

    function canWithdraw(address _to) public view returns (bool, string memory, uint) {
        if (!allowedAddresses[_to]) {
            return (false, "Address not allowed to withdraw", 0);
        }
        if (block.timestamp < lastWithdrawalTime[_to] + withdrawalDelay) {
            return (false, "Withdrawal delay not met", lastWithdrawalTime[_to]);
        }
        return (true, "", lastWithdrawalTime[_to]);
    }
}
