import { NextRequest, NextResponse } from "next/server";

const mockMap = {
  nodes: [
    { id: "1", label: "AI Lab", type: "team" },
    { id: "2", label: "Quantum Materials", type: "project" },
    { id: "3", label: "Bioinformatics", type: "project" },
    { id: "4", label: "Data Science", type: "team" },
    { id: "5", label: "Green Energy", type: "initiative" },
  ],
  edges: [
    { from: "1", to: "2" },
    { from: "1", to: "3" },
    { from: "4", to: "3" },
    { from: "5", to: "2" },
    { from: "4", to: "5" },
  ],
};

export async function GET(req: NextRequest) {
  return NextResponse.json(mockMap);
}
