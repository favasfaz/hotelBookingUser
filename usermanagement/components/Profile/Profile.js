import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import { deleteCookie, getCookie } from "cookies-next";
import { signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { changePassword } from "../../APIs/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateUserProfile } from "../../Redux/AuthSlice";
import { useDispatch } from "react-redux";
import SingleSection from "./SingleSection";

function Profile() {
  const { data: session } = useSession();
  const user = useSelector((state) => state.users);
  const [personaltoggle, setPersonalToggle] = useState(true);
  const [passwordtoggle, setPasswordToggle] = useState(false);
  const [nameedit, setNameEdit] = useState(true);
  const [emailedit, setEmailEdit] = useState(true);
  const [phoneedit, setPhoneEdit] = useState(true);
  const dispatch = useDispatch();
  const userData = Object.entries(user.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm();
  const {
    register: register4,
    handleSubmit: handleSubmit4,
    watch,
    formState: { errors: errors4 },
  } = useForm();

  const onSubmit = async (datas) => {
    if (datas.email) {
      await dispatch(UpdateUserProfile(datas));
      setEmailEdit(true);
    } else if (datas.name) {
      await dispatch(UpdateUserProfile(datas));
      setNameEdit(true);
    } else if (datas.phone) {
      console.log('phone');
      await dispatch(UpdateUserProfile(datas));
      setPhoneEdit(true);
    }
  };

  const handleLogout = () => {
    signOut();
    deleteCookie("next-auth.session-token");
    deleteCookie("userToken");
  };
  const handleChangePassword = () => {
    setPasswordToggle(true);
    setPersonalToggle(false);
  };
  const handlePersonalInfo = () => {
    setPersonalToggle(true);
    setPasswordToggle(false);
  };

  const handleNameEdit = () => {
    setNameEdit(false);
  };

  const handleEmailEdit = () => {
    setEmailEdit(false);
  };
  const handleEmailCancel = () => {
    setEmailEdit(true);
  };
  const handlePhoneEdit = () => {
    setPhoneEdit(false);
  };
  const handleNameCancel = () => {
    setNameEdit(true);
  };
  const handlePhoneCancel = () => {
    setPhoneEdit(true);
  };

  const onSubmitChangePassword = async (data) => {
    try {
      await changePassword(data);
      toast("successfully Updated");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="container  w-full h-auto flex flex-col md:flex-row px-2 md:px-12 py-5 bg-gray-50 relative">
        <div className="sidebar w-full md:w-[30%] h-full flex flex-col  ">
          <div className="namebox w-full h-24  flex items-center px-8 shadow-md rounded-md bg-white">
            <p>{<AccountCircleIcon size={48} className="text-blue-900" />}</p>
            <div className="flex flex-col ml-5 ">
              <p className="text-sm">Hello, </p>
              <h3 className="font-bold text-lg">
                {session || user ? session?.user?.name || user.user.name : ""}{" "}
              </h3>
              {session || user ? session?.user?.email || user.user.email : ""}
            </div>
          </div>
          <div className="detailsbox w-full h-auto  mt-4 shadow-md rounded-md bg-white">
            <div className="accsettings  px-10 pb-3  border-b border-gray-300 cursor-pointer  hover:shadow-md">
              <div className="accheader flex w-full  py-4  space-x-3 ">
                <p>
                  <PersonIcon className="w-5 h-5 text-blue-900" />
                </p>
                <h3 className="font-bold ">ACCOUNT SETTINGS</h3>
              </div>
              <p className="font-medium ml-10 mb-3 cursor-pointer ">
                Profile Information
              </p>
              <p className="font-medium ml-10 mb-3 cursor-pointer">
                Manage Address
              </p>
            </div>
            <div className="orderbox  w-full   py-5 px-10  space-x-3 flex border-b border-gray-300  cursor-pointer  hover:shadow-md">
              <p>
                <ArticleIcon className="w-6 h-6 text-blue-900" />
              </p>
              <h3 className="font-bold ">My Bookings</h3>
            </div>

            <div className="notificationbox  w-full px-10 py-5  space-x-3 flex border-b border-gray-300 cursor-pointer hover:shadow-md">
              <p>
                <NotificationsIcon className="w-5 h-5 text-blue-900" />
              </p>
              <h3 className="font-bold ">All Notifications</h3>
            </div>
            <div
              onClick={handleLogout}
              className="logoutbox  w-full px-10 py-5  space-x-3 flex border-b border-gray-300 cursor-pointer hover:shadow-md"
            >
              <p>
                <LogoutIcon className="w-5 h-5 text-blue-900" />
              </p>
              <h3 className="font-bold ">Logout</h3>
            </div>
          </div>
        </div>

        {/* infobox */}
        <div className="infobox w-full h-full md:w-[70%]  md:px-5 pb-5 mt-5 md:mt-0 ">
          <div className="w-full h-full rounded-md md:p-12 p-1  bg-white shadow-md relative">
            <div className="flex w-full py-5 flex-auto place-content-evenly ">
              <button
                className={
                  personaltoggle
                    ? "text-md md:text-xl ml-5 text-blue-900 font-bold cursor-pointer"
                    : " text-md md:text-xl ml-5 font-semibold cursor-pointer"
                }
                onClick={handlePersonalInfo}
              >
                Personal Information
              </button>
              <button
                className={
                  passwordtoggle
                    ? "text-md md:text-xl ml-5 text-blue-900 font-bold cursor-pointer"
                    : "text-md md:text-xl ml-5 font-semibold cursor-pointer"
                }
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </div>

            {/* Personal Information Display */}
            {personaltoggle && (
              <>
              {
                userData.map((v)=>(
                  <SingleSection data={v} />
                ))
              }

                <div className="w-full h-auto px-6 py-5 mt-6 overflow-hidden bg-stone-50  sm:max-w-lg sm:rounded-lg mx-auto">
                  <form onSubmit={handleSubmit2(onSubmit)} method="post">
                    <div className="mt-4 space-y-3">
                      <div className="flex place-content-between">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 undefined"
                        >
                          Email :
                        </label>
                        {/* {session?.user?.email || user?.user?.email ?
                          < button className='px-4 py-1 bg-blue-900 text-white rounded-lg font-semibold' onClick={handleEmailVerify}>Verify</button>
                        : ''}  */}
                        {emailedit && (
                          <EditIcon
                            className="w-5 h-5 cursor-pointer"
                            onClick={handleEmailEdit}
                          />
                        )}
                      </div>

                      <div className="flex flex-col items-start">
                        <input
                          type="email"
                          name="email"
                          readOnly={emailedit ? true : false}
                          defaultValue={
                            session?.user?.name || user?.user?.email
                              ? session?.user.email || user?.user.email
                              : ""
                          }
                          className={
                            emailedit
                              ? "block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50 p-5 bg-white cursor-not-allowed"
                              : "block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50 p-5 bg-white"
                          }
                          {...register2("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Enter valid email",
                            },
                          })}
                        />
                        {errors2.email && (
                          <p style={{ color: "red" }}>
                            {errors2.email.message}
                          </p>
                        )}
                      </div>
                      {!emailedit && (
                        <div className="flex place-content-end space-x-3">
                          <button
                            type="submit"
                            className="bg-blue-900 px-4 py-1 font-semibold text-white rounded-md"
                          >
                            Save
                          </button>
                          <button
                            className="bg-red-600 px-4 py-1 font-semibold text-white rounded-md"
                            onClick={handleEmailCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
                <div className="w-full h-auto px-6 py-5  mt-6 overflow-hidden bg-stone-50  sm:max-w-lg sm:rounded-lg mx-auto">
                  <form onSubmit={handleSubmit3(onSubmit)} method="post">
                    <div className="mt-4 space-y-3">
                      <div className="flex place-content-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 undefined"
                        >
                          Phone :
                        </label>
                        {/* {session?.user?.name || user?.user?.email ?
                          <button className='px-4 py-1 bg-blue-900 text-white rounded-lg font-semibold'>Verify</button>
                        :''}  */}
                        {phoneedit && (
                          <EditIcon
                            className="w-5 h-5 cursor-pointer"
                            onClick={handlePhoneEdit}
                          />
                        )}
                      </div>

                      <div className="flex flex-col items-start">
                        <input
                          type="number"
                          name="phone"
                          readOnly={phoneedit ? true : false}
                          defaultValue={
                            session?.user?.phone || user?.user?.phone
                              ? session?.user.phone || user.user.phone
                              : ""
                          }
                          className={
                            phoneedit
                              ? "block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50  p-5 cursor-not-allowed"
                              : "block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50  p-5 "
                          }
                          {...register3("phone", {
                            required: "Phone Number is required",
                            pattern: {
                              value: /^(0|[1-9]\d*)(\.\d+)?$/,
                              message: "Enter valid phone number",
                            },
                          })}
                        />
                        {errors3.phone && (
                          <p style={{ color: "red" }}>
                            {errors3.phone.message}
                          </p>
                        )}
                      </div>
                      {!phoneedit && (
                        <div className="flex place-content-end space-x-3">
                          <button
                            type="submit"
                            className="bg-blue-900 px-4 py-1 font-semibold text-white rounded-md"
                          >
                            Save
                          </button>
                          <button
                            className="bg-red-600 px-4 py-1 font-semibold text-white rounded-md"
                            onClick={handlePhoneCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </>
            )}

            {/* change password start*/}
            {passwordtoggle && (
              <div className="w-full h-auto px-6 py-8 mt-6 overflow-hidden bg-stone-50  sm:max-w-lg sm:rounded-lg mx-auto">
                <form
                  onSubmit={handleSubmit4(onSubmitChangePassword)}
                  method="post"
                >
                  <div className="mt-4 ">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      current Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="currentPassword"
                        className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50 bg-gray-100"
                        {...register4("currentPassword", {
                          required: "Password is required",
                          minLength: {
                            value: 4,
                            message: "Password must be more than 4 characters",
                          },
                          maxLength: {
                            value: 8,
                            message:
                              "Password cannot exceed more than 8 characters",
                          },
                        })}
                      />
                      {errors4.currentPassword && (
                        <p style={{ color: "red" }}>
                          {errors4.currentPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="newpassword"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      New Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="newpassword"
                        className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50 bg-gray-100"
                        {...register4("newpassword", {
                          required: "New Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be more than 4 characters",
                          },
                          maxLength: {
                            value: 6,
                            message:
                              "Password cannot exceed more than 8 characters",
                          },
                        })}
                      />
                      {errors4.newpassword && (
                        <p style={{ color: "red" }}>
                          {errors4.newpassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="confirmpassword"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="confirmpassword"
                        className="block w-full h-10 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50 bg-gray-100"
                        {...register4("confirmpassword", {
                          required: "Confirm Password is required",
                          validate: (value) =>
                            value === watch("newpassword") ||
                            "The passwords do not match",
                        })}
                      />
                      {errors4.confirmpassword && (
                        <p style={{ color: "red" }}>
                          {errors4.confirmpassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md  focus:outline-none  focus:bg-blue-900 font-bold"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            )}
            {/* change password end*/}
          </div>
        </div>
      </div>

      {/* <Toaster/> */}
      <ToastContainer />
    </>
  );
}

export default Profile;
