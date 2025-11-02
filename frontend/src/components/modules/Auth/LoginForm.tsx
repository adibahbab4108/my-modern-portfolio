"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import SocialLogin from "./SocialLogin";
import HorizontalLineText from "@/components/shared/HorizontalLineText";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password is too short")
    .max(128, "Password is too long"),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    const toastId = toast.loading("Signing in...");
    try {
      // const result = await login(values);
      // if (result.success) {
      //   toast.success(`${result.message}`);
      //   router.push("/");
      // } else {
      //   toast.error(`${result.message}`);
      // }
      // console.log(result);

      const res = await signIn("credentials", {
        ...values,
        // callbackUrl: "/", // redirect to "/" after successful login
        redirect: false,
      });
      console.log("inside loginfomr", res);
      if (res?.ok) {
        toast.success("Sign In successful", { id: toastId });
        router.push("/")
      } else {
        toast.error("Sign In failed", { id: toastId });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-w-sm w-full mx-auto p-6 rounded-2xl shadow-md shadow-primary border">
      <h2 className="text-2xl font-semibold mb-6">Sign in to your account</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Your strong password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md"
                    >
                      {showPassword ? <EyeClosed /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 m-0 ">
                  <FormControl>
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={(checked) =>
                        field.onChange(Boolean(checked))
                      }
                    />
                  </FormControl>
                  <FormLabel className="m-0">Remember me</FormLabel>
                </FormItem>
              )}
            />

            <a href="#" className="text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Sign in
          </Button>
        </form>
      </Form>

      <div className="text-sm text-center mt-4">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="underline">
          Create one
        </Link>
      </div>

      <HorizontalLineText text="Or continue with" />

      <SocialLogin />
    </div>
  );
}
