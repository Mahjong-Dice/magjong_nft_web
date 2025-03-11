"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/config";
import Profile from "../components/Profile";
import ConnectComponent from "@/components/ConnectComponent";
import ContractInteraction from "@/components/ContractInteraction";
import MahjongNFT from "@/components/MahjongNFTTest";
import { Flex } from "antd";

const queryClient = new QueryClient();

function WagmiProviderPage() {
  return (
    <WagmiProvider config={config} reconnectOnMount={true}>
      <QueryClientProvider client={queryClient}>
        <Flex gap={4} vertical>
          <ConnectComponent />
          <Profile />
          <MahjongNFT />
          {/* <ContractInteraction /> */}
        </Flex>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiProviderPage;
