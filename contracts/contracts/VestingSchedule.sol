// contracts/VestingSchedule.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract VestingSchedule {
    IERC20 public token;
    address public admin;

    struct Stakeholder {
        uint256 amount;
        uint256 releaseTime;
    }

    mapping(address => Stakeholder) public stakeholders;

    event TokensReleased(address stakeholder, uint256 amount);

    constructor(IERC20 _token) {
        token = _token;
        admin = msg.sender;
    }

    function addStakeholder(address stakeholder, uint256 amount, uint256 releaseTime) external {
        require(msg.sender == admin, "Only admin can add stakeholders");
        stakeholders[stakeholder] = Stakeholder(amount, releaseTime);
        token.transferFrom(admin, address(this), amount);
    }

    function releaseTokens() external {
        Stakeholder storage stakeholder = stakeholders[msg.sender];
        require(block.timestamp >= stakeholder.releaseTime, "Tokens are still vested");
        require(stakeholder.amount > 0, "No tokens to release");

        uint256 amount = stakeholder.amount;
        stakeholder.amount = 0;

        token.transfer(msg.sender, amount);
        emit TokensReleased(msg.sender, amount);
    }
}
