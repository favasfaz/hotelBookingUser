import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";

function SingleSection({data}) {

  const [nameedit, setNameEdit] = useState(true);
  const [emailedit, setEmailEdit] = useState(true);
  const [phoneedit, setPhoneEdit] = useState(true);
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
      const handleEdit =(key) =>{
        console.log(key,'key');
      }
      const handleCancel =(key)=>{
        console.log(key,'cancel');
      }
  return (
    <div className="w-full h-auto px-6 py-5 mt-6 overflow-hidden bg-stone-50  sm:max-w-lg sm:rounded-lg mx-auto">
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <div className="flex place-content-between">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 undefined"
          >
            {data[0]} :
          </label>

          {`${data[0]}edit` && (
            <EditIcon
              className="w-5 h-5 cursor-pointer"
              onClick={()=>handleEdit(data[0])}
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          <input
            type="text"
            name={data[0]}
            readOnly={`${data[0]}edit` ? true : false}
            defaultValue={
              `${data[1]}`
            }
            
            className={
              nameedit
                ? "block w-full h-10 mt-1 border-gray-800 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50  p-5 cursor-not-allowed"
                : "block w-full h-10 mt-1 border-gray-800 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-900 outline-none focus:ring-opacity-50  p-5"
            }
            {...register(`${data[0]}`, {
              required: `${data[0]} is required`,
              maxLength: {
                value: 10,
                message:
                  "Name cannot exceed more than 10 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Enter valid Name",
              },
            })}
          />
          {`errors.${data[0]}` && (
            <p style={{ color: "red" }}>{`errors.${data[0]}.message`}</p>
          )}
        </div>
        {!`${data[0]}edit` && (
          <div className="flex place-content-end space-x-3">
            <button
              type="submit"
              className="bg-blue-900 px-4 py-1 font-semibold text-white rounded-md"
            >
              Save
            </button>
            <button
              className="bg-red-600 px-4 py-1 font-semibold text-white rounded-md"
              onClick={()=>handleCancel(data[0])}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
   
  </div>
  )
}

export default SingleSection