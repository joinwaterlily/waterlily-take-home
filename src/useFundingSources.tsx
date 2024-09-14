import { useState, useEffect } from "react";

export interface FundingSources {
  id: string;
  type: string;
  name: string;
  cost: number;
  projectedLtcPayout: number;
  projectedTotalPayout: number;
  projectedROI: number;
}

let localCache: FundingSources[] = [];

export function useFundingSources() {
  const [fundingSources, setFundingSources] = useState<FundingSources[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    console.log(!!localCache);
    if (localCache.length) {
      setFundingSources(localCache);
    } else {
      requestFundingSources();
    }

    async function requestFundingSources() {
      setFundingSources([]);
      setStatus("loading");

      const res = await fetch("http://localhost:3000/funding-sources");
      const json: FundingSources[] = await res.json();

      localCache = json || [];
      setFundingSources(localCache);
      setStatus("loaded");
    }
  }, []);
  return [fundingSources, status] as const;
}
