// const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy MyToken
  // const MyToken = await hre.ethers.getContractFactory("MyToken");
  // const token = await MyToken.deploy(); // 1,000,000 * 10^18
  // await token.waitForDeployment();
  // console.log("MyToken deployed to:", token.runner.address);

  
    const VestingToken = await ethers.getContractFactory("VestingToken");
    const token = await VestingToken.deploy("VestingToken", "VTK", "10000000000");
    await token.waitForDeployment();

    console.log("VestingToken deployed to:", token.runner.address);


    const VestingSchedule = await ethers.getContractFactory("VestingSchedule");
    const vestingSchedule = await VestingSchedule.deploy(token.runner.address);
    await vestingSchedule.waitForDeployment();

    console.log("VestingSchedule deployed to:", vestingSchedule.runner.address);


  // Deploy OrganizationRegistry
  // const OrganizationRegistry = await hre.ethers.getContractFactory("OrganizationRegistry");
  // const registry = await OrganizationRegistry.deploy();
  // await registry.waitForDeployment();
  // console.log("OrganizationRegistry deployed to:", registry.runner.address);

  // Deploy VestingSchedule with the token address
  // const VestingSchedule = await hre.ethers.getContractFactory("VestingSchedule");
  // const vesting = await VestingSchedule.deploy(token.runner.address);
  // await vesting.waitForDeployment();
  // console.log("VestingSchedule deployed to:", vesting.runner.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
