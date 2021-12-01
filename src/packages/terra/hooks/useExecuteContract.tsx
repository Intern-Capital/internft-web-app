// Import Hooks
import useAddress from './useConnectedAddress';

// Import Terra-Money
import { 
    MsgExecuteContract,
} from '@terra-money/terra.js';

import {
    useConnectedWallet,
    UserDenied,
    CreateTxFailed,
    TxFailed,
    Timeout,
    TxUnspecifiedError
  } from '@terra-money/wallet-provider';

const useExecuteContract = async (contractAddr, executeMsg, fees, coins={}) => {
    const connectedWallet = useConnectedWallet();
    
    const tx = {
        address: useAddress(),
        msg: JSON.parse(executeMsg),
    }

    const txResult = {
        txResult: null,
        txHash: null,
        txError: null
    };

    const executeContractMsg = [
        new MsgExecuteContract(
        tx.address,                
        contractAddr,                   
        tx.msg,
        coins
        ),  
    ]

    try {
        const result = await connectedWallet.post({
            msgs: executeContractMsg,
            fee: fees
        })
        txResult.txResult = result
        txResult.txHash = result.result.txhash
    } catch (error) {
        if (error instanceof UserDenied) {
            console.error('User Denied');
        } else if (error instanceof CreateTxFailed) {
            console.error(`Failed to create the transaction: ${error.message}`);
        } else if (error instanceof TxFailed) {
            console.error(`Transaction Failed: ${error.message}`);
        } else if (error instanceof Timeout) {
            console.error('Timeout');
        } else if (error instanceof TxUnspecifiedError) {
            console.error(`Unspecified Error: ${error.message}`);
        } else {
            console.error(`Unknown Error: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

return txResult;
}

export default useExecuteContract;