import React from 'react';
import { useForm } from 'react-hook-form';

function UseFormhook (){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} placeholder="ENTER YOUR NAME" /><br></br>
      <input {...register('lastName', { required: true })} placeholder="ENTER YOUR LAST NAME"/>
      <br></br>
      {errors.lastName && <p>Last name is required.</p>}
      <br></br>
      <input {...register('age', { pattern: /\d+/ })} placeholder="ENTER YOUR AGE" />
      {errors.age && <p>Please enter number for age.</p>}
      <input
  type="number" placeholder='mobile'
  {...register("test", {
    min: 5
  })}
/>
      <input type="submit" />
    </form>
  );
}
export default UseFormhook;