"use client";

import { Button, Flex, Select } from "antd";
import { memo, useEffect, useState } from "react";
import { useConfig, useSwitchChain, useChainId } from "wagmi";

const ChainSelect = () => {
  const { chains } = useConfig(); // 获取可用链列表
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [selectedChainId, setSelectedChainId] = useState<number>(chainId); // 默认选中第一个链

  const options = chains.map((chain) => {
    return {
      value: chain.id,
      label: <span>{chain.name}</span>,
    };
  });
  
  return (
    <Flex>
      <Select
        style={{ width: 200 }}
        defaultValue={selectedChainId}
        options={options}
        onChange={(e) => setSelectedChainId(e)}
      />
      <Button
        type="link"
        onClick={() => {
          switchChain({ chainId: selectedChainId });
        }}
      >
        切换
      </Button>
    </Flex>
  );
};

export default memo(ChainSelect);
