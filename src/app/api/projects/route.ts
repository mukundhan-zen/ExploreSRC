import { NextRequest, NextResponse } from "next/server";

const mockProjects = {
  folders: [
    {
      name: "AI Lab",
      projects: [
        {
          name: "AI Drug Discovery",
          annotations: [
            "Reviewed ML model accuracy",
            "Potential for clinical collaboration",
          ],
        },
      ],
    },
    {
      name: "Materials Science",
      projects: [
        {
          name: "Quantum Battery",
          annotations: [
            "Novel electrolyte tested",
            "Patent application in draft",
          ],
        },
        {
          name: "Green Polymer Research",
          annotations: ["Biodegradability confirmed"],
        },
      ],
    },
  ],
};

export async function GET(req: NextRequest) {
  return NextResponse.json(mockProjects);
}
