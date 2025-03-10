import { useReadContract, useChainId, useAccount } from "wagmi";
import CounterAbi from "@/abi/Counter.json";

function ContractInteraction() {
  const chainId = useChainId();
  const account = useAccount();
  
  const { data, error, isPending } = useReadContract({
    abi: CounterAbi.abi,
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "number",
    chainId: chainId,
  });
  if (isPending)
    return (
      <div>
        Loading...
        {account.address}
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return <div>Balance: {data?.toString()}</div>;
}

export default ContractInteraction;
