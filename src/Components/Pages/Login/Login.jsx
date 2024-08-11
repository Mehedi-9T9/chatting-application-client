

const Login = () => {
    const loginHandle = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

    }
    return (
        <div className=" bg-base-200 h-screen pt-20">
            <div className='border-2 w-[700px] mx-auto p-10 rounded-xl bg-[#ED4C67] bg-opacity-40'>
                <h1 className="text-4xl font-bold text-center">Login Now!</h1>
                <form onSubmit={loginHandle} className="w-1/2 mx-auto mt-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="Type Your Email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Type Strong Password" name="password" className="input input-bordered" />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-black bg-opacity-75">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;