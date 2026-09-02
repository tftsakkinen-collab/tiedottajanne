import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function GET() {
  // Redirect to google review or feedback form
  const reviewUrl = SITE_CONFIG.googleReviewUrl || "https://www.tiedottajanne.com/yhteystiedot";
  return NextResponse.redirect(reviewUrl, 307);
}

