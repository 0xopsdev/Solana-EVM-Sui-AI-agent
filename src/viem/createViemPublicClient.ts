import { createPublicClient, http } from "viem";
import { avalancheFuji } from "viem/chains";

export function createViemPublicClient() {
  return createPublicClient({
    chain: avalancheFuji,
    transport: http(),
  });
}
