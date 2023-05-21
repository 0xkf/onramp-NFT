// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "OpenZeppelin/contracts/token/ERC721/ERC721.sol";
import "OpenZeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "OpenZeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Burnable is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // mint価格をここで定義
    // ここが最低価格になる。 0.01ETHではなく、1ETHでも可。
    uint MINT_PRICE = 0.01 ether;

    // tokenURIを固定
    string constant DEFAULT_TOKEN_URI = "https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/9473";

    constructor () ERC721 ("Burnable", "BURN") {}

    // mint処理
    function mintBurnable() public payable returns (uint256) { 
        // mint時に合わせて 0.01ether を送ってきているか確認
        require(msg.value == MINT_PRICE);

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        // 実際のmint処理
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, DEFAULT_TOKEN_URI);

        return newItemId;
    }

    // 換金burn処理
    function burn(uint256 _tokenId) public { 
        // そのNFT所有者かどうか確認
        require(ownerOf(_tokenId) == msg.sender);

        // そのNFTを無に転送する (burn)
        _transfer(msg.sender, 0x000000000000000000000000000000000000dEaD, _tokenId);

        // mint時に払った0.01etherを返す処理
        address payable receiver = payable(msg.sender);
        receiver.transfer(MINT_PRICE);
    }
}