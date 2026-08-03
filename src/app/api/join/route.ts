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

    if (!scriptUrl) {
      console.error(
        "CRITICAL MISSING CONFIG: GOOGLE_SHEET_WEBAPP_URL is not set in environment variables on deployment server."
      );
      return NextResponse.json(
        { error: "Server configuration error. Environment variable missing." },
        { status: 500 }
      );
    }

    // Send POST request to Google Apps Script Web App
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({
        name,
        email,
        domain,
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Google Apps Script response error:", res.status, errorText);
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
