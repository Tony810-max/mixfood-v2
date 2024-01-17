/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import { CheckBox } from '@mui/icons-material'
import { Button, Input } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useCallback, useEffect, useState } from 'react'

import Show from '../../../../../components/Show'
import axios from 'axios';

const LoginForm = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const isLogin = sessionStorage.getItem('user');
        if (isLogin) {
            window.location.href = '/'
        }
    }, [])

    const schema = yup
        .object()
        .shape({
            email: yup.string().required('Please enter your email').email("Please enter a valid email address"),
            password: yup.string().required('Please enter your password').min(6),
        })
        .required();
    const [isHidePassword, setIsHidePassword] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const fetchUsersData = useCallback(async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/users')
            if (response) {
                setUsers(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }, [setUsers]);

    useEffect(() => fetchUsersData(), [fetchUsersData]);
    const onSubmit = (data) => {
        const user = users.find((user) => user.email === data.email);
        if (user) {
            if (user.password === data.password) {
                alert('Đăng nhập thành công')
                sessionStorage.setItem('user', JSON.stringify(user))
                window.location.href = '/'
            } else {
                alert('Sai mật khẩu')
            }
        } else {
            alert('Không tìm thấy tài khoản')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <label className='text-[#666] text-base leading-normal' htmlFor='email'>Email</label>
                <Input {...register("email", { required: true })} className='border border-gray-500 outline-none rounded-xl h-14 px-4' disableUnderline name='email' />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <label className='text-[#666] text-base leading-normal' htmlFor='password'>Password</label>
                    <div className='flex items-center gap-2'>
                        <Show when={!isHidePassword}>
                            <Eye size={24} onClick={() => setIsHidePassword(!isHidePassword)} />
                        </Show>
                        <Show when={!!isHidePassword}>
                            <EyeOff size={24} onClick={() => setIsHidePassword(!isHidePassword)} />
                        </Show>
                        <span>{isHidePassword ? "Hide" : "Show"}</span>
                    </div>
                </div>
                <Input {...register("password", { required: true })} className='border border-gray-500 outline-none rounded-xl h-14 px-4' disableUnderline name='password' type={isHidePassword ? "password" : "text"} />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='flex items-center gap-2'>
                <CheckBox />
                <span>
                    By creating an account, I agree to our Terms of use and
                    Privacy Policy
                </span>
            </div>
            <Button variant='contained' type='submit' className='text-[#fff] rounded-3xl border-black py-4 bg-black hover:opacity-75'>Login</Button>
        </form>
    )
}

export default LoginForm