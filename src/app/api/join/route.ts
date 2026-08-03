import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, domain } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

    if (scriptUrl) {
      // Send POST request to Google Apps Script Web App
      await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          domain,
          timestamp: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });
    } else {
      console.warn("GOOGLE_SHEET_WEBAPP_URL is not configured in .env.local");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting join form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
