import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { PermissionScope } from "@airgap/beacon-sdk";
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from "@airgap/beacon-types";


const Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com/");
// Create a context
export const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {

    const scopes = [
      PermissionScope.OPERATION_REQUEST,
      PermissionScope.SIGN,
    ];
    
    try {
      const newWallet = new BeaconWallet({
        name: "DockApp",
        network: { type: NetworkType.GHOSTNET },
      });
  
      // Use newWallet instead of wallet to call requestPermissions
      await newWallet.requestPermissions(scopes);
      setWallet(newWallet); // Now you can set the wallet state with the newWallet instance
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setIsConnected(false);
    }
  };
  

  const disconnectWallet = async() => {
    if (wallet) {
      await wallet.client.clearActiveAccount();
      setWallet(null);
      setIsConnected(false);
    }
  };

  const isWalletConnected = () => {
    console.log('isConnected:', isConnected);
    if(wallet) console.log('Private key: ', wallet.getPKH());
    return isConnected;
  }

  const contextValue = useMemo(() => ({
    wallet,
    connectWallet,
    disconnectWallet,
    isWalletConnected
  }), [wallet, isConnected]);

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};
