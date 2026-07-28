"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {api} from "@/lib/api";



export default function RegisterPage() {

  const router = useRouter();
          const [formData, setformData] = useState({});
  
          const handelChange = (e) => {
              const { name, value } = e.target;
              setformData({...formData, [name]: value });
          };
  
          const handelSubmit = async (e) => {
              e.preventDefault();
              
              try{
                  const res = await api.post("/api/auth/register", formData);
                  router.push("/home");
  
              } catch (error) {
                  console.log("Error in Register", error);
              }
          };

  return (
    <div className="flex min-h-[90vh] items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">
            Create Account 🚀
          </CardTitle>

          <CardDescription>
            Create your account to get started
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handelSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>

              <Input
                name="name"
                onChange={handelChange}
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <Input
                name="password"
                onChange={handelChange}
                id="password"
                type="password"
                placeholder="Create a password"
              />
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}