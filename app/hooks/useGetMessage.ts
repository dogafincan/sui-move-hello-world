"use client";

import { useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { bcs } from "@mysten/sui/bcs";
import { useQuery } from "@tanstack/react-query";

const PACKAGE_ID =
  "0x159b80f0629ade2439d636749f99bafe5798741a6d5d64d03891a01dfe9c6aed";
const DUMMY_ADDRESS =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export function useGetMessage() {
  const client = useSuiClient();

  return useQuery({
    queryKey: ["getMessage"],
    queryFn: async () => {
      try {
        const tx = new Transaction();

        tx.moveCall({
          target: `${PACKAGE_ID}::hello::get_message`,
          arguments: [],
        });

        tx.setGasBudget(1000000);

        const result = await client.devInspectTransactionBlock({
          sender: DUMMY_ADDRESS,
          transactionBlock: tx,
        });

        if (result.effects.status.status !== "success") {
          throw new Error(`Transaction failed: ${result.effects.status.error}`);
        }

        if (!result.results || result.results.length === 0) {
          throw new Error("No results returned from the transaction");
        }

        const returnValues = result.results[0].returnValues;

        if (!returnValues || returnValues.length === 0) {
          throw new Error("No return values found");
        }

        const [returnValue] = returnValues;

        const decodedMessage = bcs
          .string()
          .parse(new Uint8Array(returnValue[0]));

        return decodedMessage;
      } catch (error) {
        console.error("Error calling get_message:", error);
        throw error;
      }
    },
    retry: 3,
    retryDelay: 1000,
  });
}
