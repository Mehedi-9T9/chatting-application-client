

const Rejister = () => {
    const rejisterHandle = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(photo);

    }
    return (
        <div className=" bg-base-200 h-screen pt-20">
            <div className='border-2 w-[700px] mx-auto p-10 rounded-xl bg-[#ED4C67] bg-opacity-40'>
                <h1 className="text-4xl font-bold text-center">Rejister Now!</h1>
                <form onSubmit={rejisterHandle} className="w-1/2 mx-auto mt-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Type Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="Type Your Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Type Strong Password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-black bg-opacity-75">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Rejister;