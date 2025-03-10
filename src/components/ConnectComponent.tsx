import { useConnect, useAccount, useDisconnect } from "wagmi";
import { Button, Flex } from "antd";
import { injected } from "wagmi/connectors";
import { config } from "@/config";
import ChainSelect from "./ChainSelect";

const ConnectComponent: React.FC = () => {
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect({
    config: config,
    mutation: {
      onSuccess: () => {
        console.log("Connected");
      },
      onError: () => {
        console.log("Error");
      },
    },
  });

  const account = useAccount();

  return (
    <Flex vertical>
      {account.address ? (
        <Flex gap={10} vertical>
          <Flex gap={10}>
            <Button type="primary" color="cyan" key={account.address} size="middle">
              {account.address}
            </Button>
            <ChainSelect />
          </Flex>
          <Button danger style={{ width: 100 }} onClick={() => disconnect()}>
            断开
          </Button>
        </Flex>
      ) : (
        <Flex vertical gap={10}>
          {connectors.map((connector) => (
            <Button
              type="primary"
              color="cyan"
              key={connector.id}
              onClick={() => connect({ connector: injected() })}
              size="middle"
            >
              {connector.name}
              {/* <WalletIcon name={connector.name} size={32} variant="branded" /> */}
            </Button>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ConnectComponent;
