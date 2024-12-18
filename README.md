# AI-OnChain-Agent

## Description

Blockchain Assistant is a powerful tool designed to interact with blockchain networks, specifically tailored for Ethereum-compatible chains. It leverages OpenAI's GPT-4o-mini model to provide a conversational interface for users to perform various blockchain operations, such as checking wallet balances, sending transactions, and deploying smart contracts. The assistant embodies the persona of Darth Vader, delivering responses with a commanding and cryptic tone.

## Features

- **Conversational Interface**: Engage with the assistant to perform blockchain operations through natural language.
- **Wallet Operations**: Check wallet balances and retrieve connected wallet addresses.
- **Transaction Management**: Send transactions with customizable parameters.
- **Smart Contract Interaction**: Deploy ERC20 tokens and interact with existing contracts.
- **Error Handling**: Robust error handling and feedback for failed operations.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- TypeScript
- OpenAI API key
- Environment variables for wallet private key and other configurations

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Patrick-Ehimen/AI-OnChain-Agent.git
   cd blockchain-assistant
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your OpenAI API key and wallet private key:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   WALLET_PRIVATE_KEY=your_wallet_private_key
   ```

### Usage

To start the assistant, run:

```bash
bun run src/index.ts
```

You can then interact with the assistant in the command line. Type "exit" to end the conversation.

### Tools

The assistant has access to various tools for performing operations:

- **Read Operations**: Check balances, retrieve wallet addresses, and read contract data.
- **Write Operations**: Send transactions, deploy contracts, and approve token allowances.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the GPT-4o-mini model.
- Viem for blockchain interaction utilities.
