import {
  useReadContract,
  useChainId,
  useWriteContract,
  useWatchContractEvent,
  useAccount,
} from "wagmi";
import { memo, useEffect, useState } from "react";
import { Button } from "antd";
import CounterAbi from '@/abi/Counter'
import type { Address } from 'abitype'

function ContractInteraction() {
  const chainId = useChainId();
  const { writeContract } = useWriteContract();
  const account = useAccount()
  const chainName = account.chain?.name ?? 'Ethereum'
  const address: Address = CounterAbi[chainName as keyof typeof CounterAbi] as Address


  const { data, error, isPending, refetch } = useReadContract({
    abi: CounterAbi.abi,
    address: address,
    functionName: "number",
    chainId: chainId,
  });

  const [currentData, setCurrentData] = useState(data?.toString() ?? "")
  useEffect(() => {
    setCurrentData(data?.toString() ?? "")
  }, [data])
  useWatchContractEvent({
    address: address,
    abi: CounterAbi.abi,
    eventName: "CounterChanged",
    chainId: chainId,
    onLogs(logs) {
      const { args: { newNumber } } = logs[logs.length - 1]
      console.log("New logs!", newNumber, "\n");
      setCurrentData(newNumber?.toString() ?? "")
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  const increment = () => {
    writeContract(
      {
        abi: CounterAbi.abi,
        address: address,
        chainId: chainId,
        functionName: "increment",
      },
      {
        onSuccess() {
          refetch();
          console.log("Transaction sent!");
        },
      }
    );
  };

  const setNumber = (setNum: bigint) => {
    writeContract({
      abi: CounterAbi.abi,
      address: address,
      chainId: chainId,
      functionName: "setNumber",
      args: [setNum],
    });
  };

  return (
    <div>
      <div>Balance: {currentData}</div>
      <Button onClick={increment}>+1</Button>
      <Button onClick={() => setNumber(BigInt(100))}>set 100</Button>
    </div>
  );
}

export default memo(ContractInteraction);
