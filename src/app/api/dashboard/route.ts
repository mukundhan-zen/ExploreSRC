import { NextRequest, NextResponse } from "next/server";

const mockDashboard = {
  activeProjects: [
    { name: "Quantum Battery", deadline: "2024-07-15", progress: 82 },
    { name: "AI Drug Discovery", deadline: "2024-08-01", progress: 58 },
    { name: "Green Polymer Research", deadline: "2024-09-01", progress: 40 },
    { name: "Genomics Platform", deadline: "2024-07-22", progress: 95 },
  ],
  recommendations: [
    "Attend the AI in Healthcare Symposium",
    "Collaborate with the Data Science team",
    "Explore new funding for sustainable materials",
  ],
  deadlines: [
    { project: "Quantum Battery", date: "2024-07-15" },
    { project: "Genomics Platform", date: "2024-07-22" },
  ],
};

export async function GET(req: NextRequest) {
  return NextResponse.json(mockDashboard);
}
