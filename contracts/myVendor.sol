// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./generateMyToken.sol";

contract Vendor is Ownable {
    // Our Token Contract
    JimCatToken myToken;

    // token price for ETH
    uint256 public tokensPerEth = 100;

    // buy Event
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

    constructor(address tokenAddress) {
        myToken = JimCatToken(tokenAddress);
    }

    /**
       * @notice Allow users to buy tokens
    */
    function buyTokens() public payable returns (uint256 tokenAmount) {
        require(msg.value > 0, "Send ETH to buy some tokens");

        uint256 amountToBuy = msg.value * tokensPerEth;

        // check vendor contract has enough amount of tokens for the transaction
        uint256 vendorBalance = myToken.balanceOf(address(this));
        require(vendorBalance >= amountToBuy, "Vendor contract has not enough tokens");

        // Transfer token to the msg.sender
        (bool sent) = myToken.transfer(msg.sender, amountToBuy);
        require(sent, "Failed to transfer token to user");

        // emit the event
        emit BuyTokens(msg.sender, msg.value, amountToBuy);

        return amountToBuy;
    }
}