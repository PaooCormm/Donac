import {useForm} from "react-hook-form";
import '../styles.css';
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPageUser() {
    const {register, handleSubmit, formState : { errors },} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate ("/inicio");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (value) => {
        await signup(value);
    })

    return (
        <div className="body">
            {
                registerErrors.map((error, i) => (
                    <div className="validation">
                        {error}
                    </div>
                ))
            }
            <form className="login-form" onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="Usuario" {...register("username")} autoFocus/>
                { errors.username && (<p className="validation">
                    El username es requerido
                </p>)}
                <input type="email" name="email" placeholder="usuario@google.com" {...register("email")} autoFocus/>
                { errors.email && (<p className="validation">
                    El email es requerido
                </p>)}
                <input type="password" name="password" placeholder="Minimo 8 caracteres" {...register("password")} autoFocus/>
                { errors.password && (<p className="validation">
                    El password es requerido
                </p>)}

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPageUser