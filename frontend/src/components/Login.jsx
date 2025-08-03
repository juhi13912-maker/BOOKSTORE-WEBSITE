import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post('http://localhost:4001/user/login', userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success('Logged in successfully!');
        document.getElementById('my_modal_3').close();

        setTimeout(() => {
          localStorage.setItem('Users', JSON.stringify(res.data.user));
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error('Error: ' + err.response.data.message);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span>E-mail</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('password', { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Login Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
              >
                Login
              </button>
              <p>
                Not Registered?{' '}
                <Link to="/signup" className="underline text-blue-600 cursor-pointer">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
