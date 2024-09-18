export interface FundingSource {
  id: string;
  type: string;
  name: string;
  cost: number;
  projectedLtcPayout: number;
  projectedTotalPayout: number;
  projectedROI: number;
}
