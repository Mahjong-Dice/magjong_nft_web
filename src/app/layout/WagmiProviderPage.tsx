"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { Profile } from "../components/Profile";
import ConnectComponent from "@/app/components/ConnectComponent";

const queryClient = new QueryClient();

function WagmiProviderPage() {
  return (
    <WagmiProvider config={config} reconnectOnMount>
      <QueryClientProvider client={queryClient}>
        {/* <Profile /> */}
        <ConnectComponent />
        <Profile />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiProviderPage;
