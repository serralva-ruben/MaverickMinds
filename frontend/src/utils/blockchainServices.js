import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from "@airgap/beacon-types";

const rpcUrl = "https://ghostnet.ecadinfra.com";
const Tezos = new TezosToolkit(rpcUrl);

let wallet;
let address;
let balance;

export const connectWallet = async () => {
    console.log("Starting wallet connection process...");
    const newWallet = new BeaconWallet({
      name: "DockdApp",
      network: {
       type: NetworkType.GHOSTNET,
     },
    });
    console.log("Requesting wallet permissions...");
    try {
        await newWallet.requestPermissions();
        console.log("Wallet permissions granted.");

        console.log("Retrieving wallet address...");
        // Directly await the promise and assign its resolved value to `address`
        address = await newWallet.getPKH();
        console.log(`Wallet address retrieved: ${address}`);

        console.log("Getting wallet balance...");
        // Now `address` is correctly populated and can be passed
        await getWalletBalance(address);
        console.log(`Wallet balance retrieved: ${balance} XTZ`);

        wallet = newWallet;
    } catch (error) {
        console.error("Error during wallet connection process:", error);
    }
};

export const disconnectWallet = () => {
    if(wallet) {
        console.log("Disconnecting wallet...");
        wallet.client.clearActiveAccount();
        wallet = undefined;
        console.log("Wallet disconnected.");
    } else {
        console.log("No wallet to disconnect.");
    }
};

export const getWalletBalance = async (address) => {
    console.log(`Fetching balance for address: ${address}`);
    const balanceMutez = await Tezos.tz.getBalance(address);
    balance = balanceMutez.div(1000000).toFormat(2);
    console.log(`Balance for ${address}: ${balance} XTZ`);
};

export const certify = async (studentAddress, contractAddress) => {
  // Implement certification logic here based on the example
  // You will need to adapt this part based on your contract and application needs
};
