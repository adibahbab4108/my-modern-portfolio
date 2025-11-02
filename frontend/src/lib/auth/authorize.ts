"use server"

import { log } from "@/utils/logger";

export const authorize = async (credentials: Record<"email" | "password", string>) => {
  if (!credentials?.email || !credentials?.password) {
    console.error("❌ Missing email or password");
    return null;
  }

  try {
    const baseApi = process.env.BASE_API;
    if (!baseApi) {
      console.error("BASE_API not configured in environment variables");
      throw new Error("Internal configuration error");
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const res = await fetch(`${baseApi}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        email: credentials.email.trim(),
        password: credentials.password,
      }),
    });
    clearTimeout(timeoutId);
    if (!res.ok) {
      console.error(`⚠️ Login request failed with status ${res.status}`);
      return null;
    }

    const result = await res.json();

    // Your backend should return: { success: true, user: {...}, token?: "..." }
    if (!result?.success || !result?.user) {
      console.warn("⚠️ Invalid login response or authentication failed");
      return null;
    }

    const user = {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email,
      role: result.user.role,
      accessToken: result.accessToken, // if backend sends one
    };

    log("Login success:", user.email);
    return user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(
      "🔥 Error during login authorize():",
      error?.message || error
    );
    return null;
  }
};
