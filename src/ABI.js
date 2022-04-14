export const contractOwnerAddress = '0x8AeF4C49B7A19DB3eF45Bbf1D4584250BFfDbEC4';
export const myTokenAddress = '0x10A903C6C99dEe5109eD65C62B7F09619E8110DF';
export const myTokenAbiContext = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "spender",
      "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
  }, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    }],
    "name": "allowance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
      "internalType": "uint256",
      "name": "subtractedValue",
      "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {
      "internalType": "uint256",
      "name": "addedValue",
      "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function"
  }, {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }, {"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
export const myVendorAddress = '0x4dceeB6df2ce435E26961d972d27cF4bc5d1A52F';
export const myVendorAbiContext = [
  {
    "inputs": [{"internalType": "address", "name": "tokenAddress", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "buyer", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amountOfETH",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amountOfTokens", "type": "uint256"}],
    "name": "BuyTokens",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "seller", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "amountOfTokens",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amountOfETH", "type": "uint256"}],
    "name": "SellTokens",
    "type": "event"
  }, {
    "inputs": [],
    "name": "buyTokens",
    "outputs": [{"internalType": "uint256", "name": "tokenAmount", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256", "name": "tokenAmountToSell", "type": "uint256"}],
    "name": "sellTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "tokensPerEth",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {"inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}
];