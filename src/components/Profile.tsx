import { useAccount } from "wagmi";
import { Button, Card } from "antd";
import { memo } from "react";

function Profile() {
  const { address, chain, connector } = useAccount();

  return (
    <Card
      actions={[
        <Button key="view" type="default">
          View
        </Button>,
        <Button key="join" type="primary">
          Join
        </Button>,
      ]}
    >
      <div style={{ marginTop: 8 }}>
        <div>{address}</div>
        <div>{chain?.name}</div>
        <div>{connector?.name}</div>
      </div>
    </Card>
  );
}

export default memo(Profile);
