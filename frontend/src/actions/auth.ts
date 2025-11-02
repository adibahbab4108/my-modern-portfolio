"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  console.log("Received data:", data);

  const { confirmPassword, ...payload } = data;

  try {
    const res = await fetch(`${process.env.BASE_API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // credentials: "include", // only if your backend uses cookies
    });
    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    console.log("Register success:", result);
    return result;
  } catch (error) {
    console.error("Register error:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Something went wrong";
    return { success: false, message };
  }
};

export const login = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BASE_API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Login failed",
      };
    }

    console.log("Login success:", result);
    return result;
  } catch (error) {
    console.log(error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Something went wrong";
    return { success: false, message };
  }
};
