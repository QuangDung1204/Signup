import React from 'react';
import Hearder from './Header';
import Textfiel from './textfiel';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/userSlice';

function Dangnhap() {
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        email: yup.string().required("Invalid Email"),
        password: yup.string().required("Invalid Password")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(login(values))
        },
    });

    return (
        <div className="">
            <Hearder />
            <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://hdqwalls.com/download/2018-audi-r8-v10-front-z7-2560x1440.jpg")' }}>
                <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                            <img src="https://th.bing.com/th/id/R.0ad6be08c017c7028ea6bf222846198f?rik=8bBrwWQ5d6oAAQ&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f08%2fLogo-Audi.png&ehk=XVXFYXI%2bOps7gL32UszNe8ZspUD221KF0sfmtlFoJp4%3d&risl=&pid=ImgRaw&r=0" width={100} alt='' srcSet />
                            <h1 className="mb-2 text-2xl">Audi</h1>
                            <span className="text-gray-300">Enter Login</span>
                        </div>
                        <form onSubmit={formik.handleSubmit} action="#">
                            <Textfiel label='Usename' value={formik.values.email} onChange={formik.handleChange("email")} required={true} helperText={formik.touched.email && formik.errors.email} error={Boolean(formik.touched.email) && formik.errors.email} />
                            <Textfiel label='Passwords' value={formik.values.password} onChange={formik.handleChange("password")} type='passwords' required={true} helperText={formik.touched.password && formik.errors.password} error={Boolean(formik.touched.email) && formik.errors.email} />

                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button type="submit" className="rounded-3xl bg-yellow-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dangnhap
