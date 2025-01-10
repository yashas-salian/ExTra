import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { SignupInput } from "@yashas40/modules";

export const Authup = () => {
  const [userDetails, setuserDetails] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <section className="bg-stone-800 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center w-full px-4 py-8 mx-auto">
        <div className="mb-6">
          <TypewriterEffect
            words={[
              {
                text: `Welcome${" "}to${" "}ExTra`,
                className:
                  "text-cyan-600 pb-2 text-2xl sm:text-4xl font-bold text-center",
              },
            ]}
          />
        </div>
        <div className="flex justify-center w-full max-w-lg bg-stone-900 rounded-lg shadow">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <div className="flex justify-center">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-cyan-600 sm:text-3xl">
                Create an account
              </h1>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-cyan-600">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-stone-600 border border-gray-300 text-cyan-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={(e) =>
                    setuserDetails((c) => ({
                      ...c,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-cyan-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="bg-stone-600 border border-gray-300 text-cyan-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={(e) =>
                    setuserDetails((c) => ({
                      ...c,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-cyan-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-stone-600 border border-gray-300 text-cyan-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={(e) =>
                    setuserDetails((c) => ({
                      ...c,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="w-full sm:w-[300px] text-black bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const response = await axios.post(
                        `${BACKEND_URL}/api/v1/user/signup`,
                        {
                          username: userDetails.name,
                          email: userDetails.email,
                          password: userDetails.password,
                        }
                      );
                      const jwt = response.data.token;
                      if (jwt) {
                        localStorage.setItem("token", jwt);
                        navigate("/dashboard");
                      }
                    } catch (e) {
                      alert("Signup failed");
                    }
                  }}
                >
                  Create an account
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-sm font-light text-cyan-600">
                  Already have an account?{" "}
                  <Link
                    to={"/Signin"}
                    className="no-underline hover:underline text-cyan-500"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
