import { useForm } from "react-hook-form";

export default function Sample() {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async data => { console.log(data); };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: "Please enter." })} // custom message
      />
      <input type="submit" />
    </form>
  );
}