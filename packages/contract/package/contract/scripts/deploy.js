// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.utils.parseEther("0.001");

//   const Lock = await hre.ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(
//     `Lock with ${ethers.utils.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


// const main = async () => {
//   const nftContractFactory = await hre.ethers.getContractFactory('Burnable');
//   const nftContract = await nftContractFactory.deploy();
//   await nftContract.deployed();
//   console.log("Contract deployed to:", nftContract.address);

//   // Call the function.
//   let txn = await nftContract.makeAnEpicNFT()
//   // Wait for it to be mined.
//   await txn.wait()
//   console.log("Minted NFT #1")

//   // Mint another NFT for fun.
//   txn = await nftContract.makeAnEpicNFT()
//   // Wait for it to be mined.
//   await txn.wait()
//   console.log("Minted NFT #2")
  
// };

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// runMain();

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('Burnable');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
//   let txn = await nftContract.mintBurnable()
//   // Wait for it to be mined.
//   await txn.wait()
// // mintBurnable
//   // Mint another NFT for fun.
//   txn = await nftContract.mintBurnable()
//   // Wait for it to be mined.
//   await txn.wait()

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();