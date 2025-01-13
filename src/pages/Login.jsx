import { Link } from "react-router-dom";  
export default function SignUp() {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="src/assets/vidbag.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-75 bg-primary"></div>
        {/* Grain Overlay */}
        <div className="grain-overlay"></div>

        {/* Logo "SNAP SIERRA" */}
       <div
          className="absolute p-4 text-left text-font top-16 left-6"
        >
          <h1 className="text-sm font-bold">
            SNAP SIERR<span className="relative">
              A
              <span className="absolute text-xs -top-1">©</span>
            </span>
          </h1>
        </div>  

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-font">
          <div className="p-8 bg-primary rounded-2xl opacity-90 md:w-96">
            <div className="flex flex-col gap-3 text-center">
              {/* Logo */}               
              <img                 
                src="src/assets/logo/logo-dark-background.svg"                 
                alt="logo"                 
                className="mx-auto mb-4 shadow-md size-20"               
              />                

              {/* Heading */}
              <h2 className="pb-8 text-4xl text-font">Welcome to Snapsierra</h2>

              {/* Form */}
              <form className="flex flex-col items-center">
                <div className="relative w-full">
                  <input
                    className="w-full px-4 py-3 my-4 mt-16 text-base border-b-2 border-nav-menu text-font bg-primary focus:outline-none font-Playfair"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    className="w-full px-4 py-3 my-4 text-base border-b-2 border-nav-menu text-font bg-primary focus:outline-none font-Playfair"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <Link to='/Explore'>
                <button className="px-10 py-3 mt-10 text-sm font-bold transition bg-font text-primary w-max rounded-3xl hover:border-2 hover:border-font hover:bg-primary hover:text-font font-poppins">
                  Login
                </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
