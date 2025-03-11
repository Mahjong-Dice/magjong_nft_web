import { useAccount, useBalance } from "wagmi";
import { Button, Card } from "antd";
import { memo } from "react";

function Profile() {
  const { address, chain, connector } = useAccount();
  const { data: balance } = useBalance({
    address: address,
    query: {
      enabled: true
    }
  });

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
        {
          balance?.formatted && balance?.symbol && (
            <div>
              余额：
              {balance.formatted} {balance.symbol}
            </div>
          )
        }
      </div>
    </Card>
  );
}

export default memo(Profile);
