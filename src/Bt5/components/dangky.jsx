import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Hearder from './Header';

function Dangky() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Tên không được để trống'),
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Email không được để trống'),
        password: Yup.string()
            .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
            .matches(/(?=.*[A-Z])/, 'Mật khẩu phải có ít nhất 1 chữ cái viết hoa')
            .matches(/(?=.*\d)/, 'Mật khẩu phải có ít nhất 1 chữ số')
            .required('Mật khẩu không được để trống'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
            .required('Xác nhận mật khẩu không được để trống'),
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert('Đăng ký thành công');
            navigate('/bt5');
        },
    });

    return (
        <div>
            <Hearder />
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Audi
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Tên
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-sm text-red-600">{formik.errors.name}</div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-sm text-red-600">{formik.errors.email}</div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mật khẩu
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                        }`}
                                    error={Boolean(formik.touched.password) && formik.errors.password}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="text-sm text-red-600">{formik.errors.password}</div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                Xác nhận mật khẩu
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={formik.values.password_confirmation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${formik.touched.password_confirmation && formik.errors.password_confirmation ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.password_confirmation && formik.errors.password_confirmation && (
                                    <div className="text-sm text-red-600">{formik.errors.password_confirmation}</div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a className="text-sm text-gray-600 underline hover:text-gray-900" href="">
                                Đã đăng ký?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dangky;
