import type { PaginatedResponse } from '@/types';

export interface CodeInfo {
  code_id: string;
  creator: string;
  data_hash: string;
  instantiate_permission: {
    permission: string;
    address: string;
    addresses: string[];
  };
}

export interface ContractInfo {
  verifier: string;
  program_id: string;
  state_digest: string;
}

export interface WasmParam {
  params: {
    code_upload_access: {
      permission: string;
      address: string;
      addresses: string[];
    };
    instantiate_default_permission: string;
  };
}

export interface HistoryEntry {
  operation: string;
  code_id: string;
  updated: {
    block_height: string;
    tx_index: string;
  };
  msg: string;
}

export interface Models {
  key: string;
  value: string;
}

export interface PaginabledContractHistory extends PaginatedResponse {
  entries: HistoryEntry[];
}

export interface PaginabledContractStates extends PaginatedResponse {
  models: Models[];
}

export interface PaginabledCodeInfos extends PaginatedResponse {
  code_infos: CodeInfo[];
}
export interface PaginabledContracts extends PaginatedResponse {
  // return type of cosmwasm_code_id_contracts
  contracts?: string[];
  // return type of cosmwasm_wasm_contracts_creator
  contract_addresses?: string[];
}
