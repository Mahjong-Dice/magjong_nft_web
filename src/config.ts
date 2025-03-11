import { http, createConfig, webSocket } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { anvil } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia, anvil],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http("https://sepolia.infura.io/v3/5a40531b0075416ba71d6d436322ca5e"),
    [anvil.id]: http("http://localhost:8545"),
  },
})