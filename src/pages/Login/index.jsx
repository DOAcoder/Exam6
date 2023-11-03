import React from 'react';

const Login = () => {
  return (
    <div className="w-[800px] h-[650px] mt-[100px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
      <div className="wrapper  ">
        <div className="w-full bg-blue-950 h-[10px]"></div>
        <div className="mt-[50px] mb-[20px]  p-[50px]">
          <h1 className=" text-center text-[80px] font-black leading-[20px]">
            Login
          </h1>
        </div>

        <form
          action=""
          className="px-[50px] mb-[20px]  border-b-2 border-t-2 border-gray-300 py-[50px]"
        >
          <label htmlFor="">
            <p className=" mb-[10px] text-[20px] font-semibold text-gray-500">
              Foydalanuvchi nomi
            </p>
            <input
              className="w-full rounded-lg border-gray-800 py-3 px-5 mb-[30px]"
              type="text"
              placeholder="Foydalanuvchi nomi..."
            />
          </label>
          <label htmlFor="">
            <p className=" mb-[10px] text-[20px] font-semibold text-gray-500">
              Parol
            </p>
            <input
              className="w-full rounded-lg border-gray-800 py-3 px-5 mb-[20px]"
              type="text"
              placeholder="Parol..."
            />
          </label>
          <label htmlFor="" className='flex items-center gap-x-5'>
            <input type="checkbox" className=" rounded-md" />
            <p className='font-normal text-[18px] text-gray-600'>Parolni kurish</p>
          </label>
        </form>
        <button className=' ml-[50px] bg-blue-600 px-3 py-2 text-[20px] font-medium text-white rounded-lg'>Kirish</button>
      </div>
    </div>
  );
};

export default Login;