import React from 'react'
import { useAuth } from '../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, errors, onLogin, navigate } = useAuth();
  return (  
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-4rem] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white">Login to your account</h1>
          <p className="mt-2 text-sm text-slate-300">
            Enter your email and password to continue.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onLogin)}
          className="space-y-5"
        >
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email address
            </label>
            <input
            {...register("email", { required: "Email is required" })}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-200">
                Password
              </label>
              <a href="#" className="text-sm text-cyan-300 transition hover:text-cyan-200">
                Forgot password?
              </a>
            </div>
            <input
            {...register("password", { required: "Password is required" })}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <button onClick={()=>{navigate("/register")}} className="font-medium text-cyan-300 transition hover:text-cyan-200">
            Register
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
