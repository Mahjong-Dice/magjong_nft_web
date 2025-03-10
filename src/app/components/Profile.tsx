import { useAccount, useEnsName } from "wagmi";
import { Avatar, Button, Card } from "@chakra-ui/react";

export function Profile() {
  const { address, chain, connector    } = useAccount();
  console.log("address", address);

  return (
    <Card.Root width="320px">
      <Card.Body gap="2">
        <Card.Title mt="2">{address}</Card.Title>
        <Card.Title>{chain?.name}</Card.Title>
        <Card.Title>{connector?.name}</Card.Title>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  );
}
