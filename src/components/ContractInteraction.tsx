import {
  useReadContract,
  useChainId,
  useWriteContract,
  useWatchContractEvent,
} from "wagmi";
import CounterAbi from "@/abi/Counter.json";
import { memo, useEffect } from "react";
import { Button } from "antd";

function ContractInteraction() {
  const chainId = useChainId();
  const { writeContract } = useWriteContract();
  useWatchContractEvent({
    address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    abi: [
      {
        type: "function",
        name: "increment",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "number",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "setNumber",
        inputs: [
          { name: "newNumber", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "event",
        name: "CounterChanged",
        inputs: [
          {
            name: "newNumber",
            type: "uint256",
            indexed: true,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
    ] as const,
    eventName: "CounterChanged",
    onLogs(logs) {
      console.log("New logs!", logs);
    },
  });
  const { data, error, isPending, refetch } = useReadContract({
    abi: CounterAbi.abi,
    address: CounterAbi.address,
    functionName: "number",
    chainId: chainId,
  });
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const increment = () => {
    writeContract(
      {
        abi: CounterAbi.abi,
        address: CounterAbi.address,
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

  const setNumber = (setNum: number) => {
    writeContract({
      abi: CounterAbi.abi,
      address: CounterAbi.address,
      chainId: chainId,
      functionName: "setNumber",
      args: [setNum],
    });
  };

  return (
    <div>
      <div>Balance: {data?.toString()}</div>
      <Button onClick={increment}>+1</Button>
      <Button onClick={() => setNumber(100)}>set 100</Button>
    </div>
  );
}

export default memo(ContractInteraction);
