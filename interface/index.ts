import type { Address, AccessList } from "viem";

export interface GetBalanceArgs {
  wallet: Address;
}

// No arguments needed since we're getting the connected wallet
export interface GetWalletAddressArgs {}

export interface SendTransactionArgs {
  to: Address;
  value?: string;
  data?: `0x${string}`;
  nonce?: number;
  gasPrice?: string;
  accessList?: AccessList;
  factoryDeps?: `0x${string}`[];
  paymaster?: Address;
  paymasterInput?: `0x${string}`;
}
