import { NextRequest, NextResponse } from "next/server";

const mockInsights = {
  researchOutput: 132,
  collaborationIndex: 0.87,
  innovationImpact: 24,
  fundingROI: 3.6,
  topTrends: [
    "AI in Drug Discovery",
    "Green Energy Materials",
    "Quantum Computing Simulations",
  ],
};

export async function GET(req: NextRequest) {
  return NextResponse.json(mockInsights);
}
