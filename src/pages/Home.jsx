import React from "react";
import { useNavigate } from "react-router-dom";
import PostCards from "../components/PostCards";
import healthPosts from "../utils/PostData";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { getUser, isLoading, Logout } = useAuth();
  const authenticatedUser = getUser();

  if (isLoading) {
    return null;
  }

  return (
    <div className="w-full bg-[#F5F6F8] min-h-screen pt-24 ">
      <nav
        className="md:px-20 px-4  py-6 flex justify-between items-center fixed z-50 w-full top-0 bg-white backdrop-filter backdrop-blur-sm border-b border-gray-200 bg-opacity-30 shadow-custom-light"
        aria-label="navbar"
        id="navbar"
      >
        <div className="">
          <h1 className="text-primary font-extrabold text-4xl">TRYOUT</h1>
        </div>
        <div className="flex items-center gap-x-2" aria-label="header-text">
          {authenticatedUser ? (
            <div className="flex gap-x-3 items-center">
              <p className="text-textBlack font-bold text-lg">
                Welcome {authenticatedUser?.fullName}
              </p>
              <button
                onClick={() => {
                  Logout();
                }}
                aria-label="sign-in button"
                className="text-red-500  font-bold md:text-sm text-xs px-4 py-2 bg-lightRed rounded-[4px] shadow-button-light"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              {" "}
              <button
                onClick={() => navigate("/signup")}
                aria-label="sign-in button"
                className="text-primary  font-bold md:text-sm text-xs px-4 py-2 border border-primary rounded-[4px] shadow-button-light"
              >
                Sign up
              </button>
              <button
                onClick={() => navigate("/login")}
                aria-label="sign-in button"
                className="text-white bg-primary font-bold md:text-sm text-xs px-4 py-2 rounded-[4px] shadow-button-light"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </nav>
      <section
        className="w-full lg:px-20 md:px-10 px-6 pt-6"
        aria-label="page-content "
      >
        <h1 className="text-textBlack font-semibold text-2xl text-center uppercase">
          Let's do it the health way
        </h1>
        <div
          className={`w-full mt-4 ${
            authenticatedUser ? "flex justify-between gap-x-10" : ""
          }`}
        >
          <div
            className={`${
              authenticatedUser
                ? "grid-cols-2 my-6"
                : " lg:grid-cols-4  md:grid-cols-3 "
            } grid auto-rows-auto lg:gap-6 gap-4 `}
          >
            {healthPosts.map((p, index) => (
              <PostCards key={index} title={p.title} content={p.body} />
            ))}
          </div>
          {authenticatedUser && (
            <>
              <div className="w-full mt-4 flex flex-col gap-x-6">
                <div className=" flex flex-col gap-3 w-full">
                  <div className="w-full text-center">
                    <p className="font-extrabold text-primary text-xl">
                      I hope you feel really better as you type !!!!!
                    </p>
                  </div>
                  <textarea
                    rows={6}
                    cols={6}
                    placeholder="Bare your heart..."
                    className="p-3 rounded-lg border border-primary resize-none bg-lightBlue outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
