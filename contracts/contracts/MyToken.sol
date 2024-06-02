// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint256 initialSupply = 100000000000;
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }
}


