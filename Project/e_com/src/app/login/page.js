"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {api} from '@/lib/api';

export default function LoginPage() {
        const router = useRouter();
        const [formData, setformData] = useState({});

        const handelChange = (e) => {
            const { name, value } = e.target;
            setformData({...formData, [name]: value });
        };

        const handelSubmit = async (e) => {
            e.preventDefault();
            
            try{
                const res = await api.post("/api/auth/login", formData);
                router.push("/home");

            } catch (error) {
                console.log("Error in Login", error);
            }
        };

  return (
    <div className="flex min-h-[90vh] items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">
            Welcome Back 👋
          </CardTitle>
          <CardDescription>
            Sign in to continue to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
          onSubmit={handelSubmit}
        className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                name="email"
                onChange={handelChange}
                id="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                name="password"
                onChange={handelChange}
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary hover:underline"
            >
              Register here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}