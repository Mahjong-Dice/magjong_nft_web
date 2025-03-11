export default {
  "Anvil": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  "Sepolia": "0xFB97302543f1A4ce9B4362E4F9620F62f7264954",
  "abi": [
    {
      "type": "function",
      "name": "increment",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "number",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setNumber",
      "inputs": [
        { "name": "newNumber", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "CounterChanged",
      "inputs": [
        {
          "name": "newNumber",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ] as const
}
