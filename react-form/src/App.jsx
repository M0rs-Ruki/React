import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // API call simulate 
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert(JSON.stringify(data))
    console.log(`The daat is ${JSON.stringify(data)}`)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>First Name: </label>
          <input 
          className={errors.firstName ? 'input-error': ""}
          type="text" {...register('firstName',{
            required: {
              value: true,
              message: 'Required'
            },
            minLength: {
              value: 3,
              message: 'Must be at least 3 characters long'
            },
            maxLength: {
              value: 10,
              message: 'Must be 10 characters or less'
            }
          })}/>
          {errors.firstName && <span className='error-message'>{errors.firstName.message}</span>}
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input 
          className={errors.lastName ? 'input-error': ""}
          type="text" {...register('lastName', { required: true })}/>
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <br />
        <div>
          <label>Number: </label>
          <input 
          className={errors.number ? 'input-error': ""}
          type="number" {...register('number', { required: true })}/>
          {errors.number && <span>{errors.number.message}</span>}
        </div>
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting...' : 'Submit'}/>
      </form>
    </div>
  )
}

export default App
