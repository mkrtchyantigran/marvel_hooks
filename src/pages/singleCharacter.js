
import "./singleCharacter.scss";

import { useForm } from "react-hook-form";
import { useState } from "react";



 const _API_URL = "https://gateway.marvel.com:443/v1/public";
   const _API_KEY = "apikey=40e2aa9621e1603b7ea9a63e26483c6d"

export default function SingleCharacterPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    
      const onSubmit = (data) =>  {
        
        
      }
      console.log(watch("example"))


    return (
        <div className="single-character">
            
            
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <h1>Or find a character by name:</h1>

            <input {...register("exampleRequired", { required: true })} />
            
            <input type="submit" />

            {errors.exampleRequired && <span>This field is required</span>}

            </form>
        </div>
    )
} 