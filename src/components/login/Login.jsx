import React from "react";

function Login() {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl w-full">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Seamless Login for Exclusive Access
        </h1>
        <p className="text-[15px] mt-6 text-slate-600 leading-relaxed">
          Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.
        </p>
        <p className="text-[15px] mt-6 lg:mt-12 text-slate-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline ml-1">
            Register here
          </a>
        </p>
      </div>

      <form className="max-w-md w-full lg:ml-auto">
        <h2 className="text-slate-900 text-3xl font-semibold mb-8">Sign in</h2>

        <div className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-slate-100 text-sm text-slate-900 px-4 py-3 rounded-md border border-gray-200 focus:border-blue-600 focus:bg-transparent outline-0"
              placeholder="Enter Email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full bg-slate-100 text-sm text-slate-900 px-4 py-3 rounded-md border border-gray-200 focus:border-blue-600 focus:bg-transparent outline-0"
              placeholder="Enter Password"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-3 text-sm text-slate-900">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 font-medium hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Login button */}
        <div className="mt-12">
          <button
            type="button"
            className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
          >
            Log in
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <hr className="w-full border-slate-300" />
          <p className="text-sm text-slate-900 text-center">or</p>
          <hr className="w-full border-slate-300" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-6">
          <button type="button" className="cursor-pointer">
            {/* Google Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
              <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"></path>
              <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"></path>
              <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"></path>
              <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"></path>
              <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"></path>
              <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"></path>
            </svg>
          </button>
          <button type="button" className="cursor-pointer">
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
              <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59..."></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
