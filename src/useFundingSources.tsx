import { useState, useEffect } from "react";
import { FundingSource } from "./types";

export function useFundingSources() {
  const [fundingSources, setFundingSources] = useState<FundingSource[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestFundingSources();

    async function requestFundingSources() {
      setFundingSources([]);
      setStatus("loading");

      const res = await fetch("http://localhost:3000/funding-sources");
      const json: FundingSource[] = await res.json();
      setFundingSources(json);
      setStatus("loaded");
    }
  }, []);

  return [fundingSources, setFundingSources, status] as const;
}
