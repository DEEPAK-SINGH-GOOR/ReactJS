import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import "./validation.css"

const validation = z.object({
    name: z.string().min(2, "Min 2 characters !!").max(25, "Less than 25 characters !!"),
    email: z.string().email(),
    password: z.string().min(6, "At list 6 characters")
        .regex(/[a-z]/, "Small characters Require !!")
        .regex(/[A-Z]/, "Capital characters Require !!")
        .regex(/[!@#$%&*]/, "Special characters !!")
})
const userFrom = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(validation)});

    const onSubmit = (data) => {
        console.log("onSubmit", data, errors);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">name</label>
                <input type="text" {...register("name")} className={errors.name ? "error" :"success"}/>
                {errors.name && <p>{errors.name.message}</p>}
                <br />
                <label>email: </label>
                <input type="email" {...register("email")} className={errors.email ?"error" : "success"}/>
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <label htmlFor="">password</label>
                <input type="text" {...register("password")} className={errors.email ?"error" : "success"}/>
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}
export default userFrom;
