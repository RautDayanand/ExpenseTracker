import React from "react";
import GoogleImg from "../../images/Google_img.png";


function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      {/* Card */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
        {/* Left Image */}
        <div className="hidden lg:block">
          <img
            src="https://readymadeui.com/signin-image.webp"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-10 sm:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sign In</h1>
          <p className="text-gray-500 mb-8">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Register here
            </a>
          </p>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                required
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Login */}
            <button className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-gray-100 transition-colors">
              <img
                src={GoogleImg} // Use imported image
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
