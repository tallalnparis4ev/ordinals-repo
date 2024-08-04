// Interface for a single Satoshi
interface Satoshi {
  number: string;
  rarity_ranking: string;
  offset: number;
}

// Interface for a single Inscription
interface Inscription {
  id: string;
  offset: number;
  content_type: string;
}

// Interface for a single UTXO
export interface UTXO {
  txid: string;
  vout: number;
  block_height: number;
  value: number;
  sats: Satoshi[];
  inscriptions: Inscription[];
}

// Interface for the response of the Ordinal UTXO API
export interface OrdinalUTXOResponse {
  limit: number;
  offset: number;
  total: number;
  results: UTXO[];
}

// Interface for the details of a single Inscription
export interface InscriptionDetail {
  id: string;
  number: number;
  address: string;
  genesis_address: string;
  genesis_block_height: number;
  genesis_block_hash: string;
  genesis_tx_id: string;
  genesis_fee: number;
  genesis_timestamp: number;
  location: string;
  output: string;
  offset: number;
  sat_ordinal: number;
  sat_rarity: string;
  sat_coinbase_height: number;
  mime_type: string;
  content_type: string;
  content_length: number;
  tx_id: string;
  timestamp: number;
  value: number;
}
