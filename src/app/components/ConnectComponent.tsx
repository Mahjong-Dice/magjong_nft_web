"use client";
import { useConnect } from "wagmi";
import { Button, Grid } from "@chakra-ui/react";
import { injected } from "wagmi/connectors";
import { WalletIcon } from '@web3icons/react'

// const walletIcons = {
//   injected: <SiOkx />,
//   walletconnect: <SiWalletConnect />,
//   magic: <SiMetaMask />,
//   coinbase: <SiOkx />,
// };

const ConnectComponent: React.FC = () => {
  const { connect, connectors } = useConnect({
    mutation: {
      onSuccess: () => {
        console.log("Connected");
      },
      onError: () => {
        console.log("Error");
      },
    },
  });

  return (
    <Grid
      column={1}
      row={1}
      gap={4}
      width="100%"
      maxWidth="800px" // 限制最大宽度
      mx="auto" // 水平居中
    >
      {connectors.map((connector) => (
        <Button
          key={connector.id}
          onClick={() => connect({ connector: injected() })}
          size="md"
          width="100%" // 按钮宽度填满Grid单元格
        >
          {connector.name}
          <WalletIcon name={connector.name} size={32} variant="branded" /> // matches the name
        </Button>
      ))}
    </Grid>
  );
};

export default ConnectComponent;
