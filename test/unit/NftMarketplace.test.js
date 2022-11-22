const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name) ? describe.skip : describe("Nft Marketplace Tests", function () {
    let nftMarketplace, basicNftconst PRICE = ethers,utils.parseEther("0.1")
    const TOKEN_ID = 0
    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer
        player = (await getNamedAccounts()).player
        await deployments.fixture(["all"])
        nftMarketplace = await ethers.getContract("NftMarketplace")
        basicNft = await ethers.getContract("BasicNft")
    })
})
