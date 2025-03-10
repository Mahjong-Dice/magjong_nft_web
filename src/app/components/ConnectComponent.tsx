"use client";
import { useConnect } from "wagmi";
import { Button, HStack } from "@chakra-ui/react"
import { injected } from 'wagmi/connectors'

const ConnectComponent: React.FC = () => {
  const { connect, connectors } = useConnect();
  return (
    <HStack>
      {connectors.map((connector) => (
        <Button key={connector.id} onClick={() => connect({ connector: injected() })}>
          {connector.name}
        </Button>
      ))}
    </HStack>
  );
};

export default ConnectComponent;
