import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { avalancheFuji } from "viem/chains";

export function createViemWalletClient() {
  if (!process.env.WALLET_PRIVATE_KEY) {
    throw new Error("⛔ WALLET_PRIVATE_KEY environment variable is not set.");
  }

  const account = privateKeyToAccount(
    process.env.WALLET_PRIVATE_KEY as `0x${string}`
  );

  return createWalletClient({
    account,
    chain: avalancheFuji,
    transport: http(),
  });
}
