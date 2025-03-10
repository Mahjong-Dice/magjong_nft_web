"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { Profile } from "../components/Profile";
import ConnectComponent from "@/app/components/ConnectComponent";
import { Flex } from "@chakra-ui/react";

const queryClient = new QueryClient();

function WagmiProviderPage() {
  return (
    <WagmiProvider config={config} reconnectOnMount>
      <QueryClientProvider client={queryClient}>
        <Flex gap={4} direction="column" p={4}>
          <ConnectComponent />
          <Profile />
        </Flex>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiProviderPage;
