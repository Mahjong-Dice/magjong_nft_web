import { useAccount } from "wagmi";
import { Button, Card } from "antd";
import { memo } from "react";

function Profile() {
  const { address, chain, connector } = useAccount();

  return (
    <Card
      style={{ width: 320 }}
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
        <div style={{ fontWeight: 600 }}>{address}</div>
        <div>{chain?.name}</div>
        <div>{connector?.name}</div>
      </div>
    </Card>
  );
}

export default memo(Profile);
