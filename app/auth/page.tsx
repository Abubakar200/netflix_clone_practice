"use client";
import Image from "next/image";
import Input from "../_components/input";
import React, { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div
      className="relative h-full w-full bg-no-repeat bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="bg-black lg:bg-opacity-50 h-full w-full">
        <nav className="px-12 py-5">
          <Image src={"/images/logo.png"} alt="Logo" width={120} height={120} />
        </nav>
        <div className="flex justify-center">
          <div className="lg:max-w-md rounded-md w-full mt-2 self-center lg:w-2/5 py-16 px-16 bg-black bg-opacity-70">
            <h2 className="text-3xl text-white mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  label="Username"
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                />
              )}
              <Input
                id="email"
                label="Email"
                onChange={(e: any) => setName(e.target.value)}
                value={name}
                type="text"
              />
              <Input
                id="password"
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 transition hover:bg-red-700 text-white rounded-md w-full mt-10">
              {variant === "login" ? "Login" : "Register"}
            </button>
            <p className="text-sm mt-12 text-neutral-500">
             {variant === "login" ? 'First time using Netflix? ' : "Already have an account"} 
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
               {variant === "login"? "Create an account " : "Login"} 
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
