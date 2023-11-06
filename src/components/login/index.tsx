const Login = () => {
  return (
    <div className="login flex justify-center max-w-screen-2x min-h-screen w-full">
      <div className="w-[390px]">
        <div className="text-center pt-20 pb-16">
          <span className="text-4xl">Welcome</span>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="
                        h-[120px]
                        w-[120px]
                        rounded-full
                        bg-[url('https://res.cloudinary.com/cuong/image/upload/v1665993081/image/1000_F_208435521_EI6t7FKQfzOu4dwoKOZ0nnDliY2yX2kb_cxivnv.jpg')]
                        bg-center bg-cover bg-no-repeat
                        align-middle
                    "
          ></div>
        </div>

        <div className="mt-20 h-[52px] relative">
          {/* <span className="">UserName :</span>  */}
          <input
            className="
                        p-4
                        border-2
                        rounded-full
                        h-full
                        w-full
                        focus:outline-none focus:border-red-500
                        hover:cursor-pointer hover:border-red-100
                    "
            name="userName"
            placeholder="Enter username"
          />
        </div>
        <div className="mt-3 mb-12 h-[52px] relative">
          {/* <span className="">UserName :</span>  */}
          <input
            className="
                        p-4
                        border-2
                        rounded-full
                        h-full
                        w-full
                        focus:outline-none focus:border-red-500
                        hover:cursor-pointer hover:border-red-100
                    "
            name="password"
            placeholder="Enter password"
          />
        </div>

        <div className="h-[52px]">
          <button
            onClick={() => {}}
            className="
                        w-full
                        h-full
                        rounded-full
                        bg-green-400
                        opacity-80
                        hover:opacity-100
                    "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
