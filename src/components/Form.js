'use client'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
const CpfValidation = require('../utility/cpfValidation')
import React, { useState } from "react"
import CpfInvalido from '../components/CpfInvalido'
import CpfValido from '../components/CpfValido'

const Form = () => {
    const [retornoValidacao, setRetornoValidacao] = useState(false)
    const [valido, setValido] = useState(null)
    const [cpf, setCpf] = useState('')

    const defaultValues = {
        valor: '',
    }

    const {
        control,
        handleSubmit,
        reset
    } = useForm({ defaultValues })

    const onSubmit = (data) => {
        const validarCPF = CpfValidation.validarCPF(data.valor)
        setCpf(data.valor)
        validarCPF ? setValido(false) : setValido(true)
        setRetornoValidacao(true)
    }

    return (
        <>
            {!retornoValidacao ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center flex-col my-6'>
                        <Controller
                            id='valor'
                            name='valor'
                            control={control}
                            render={({ field }) => (
                                <InputMask
                                    {...field}
                                    mask='999.999.999-99'
                                    maskChar={null}
                                    placeholder={'Digite um CPF'}
                                    className='bg-white border cursor-pointer border-gray-300 text-slate-600 text-sm rounded-lg block w-full p-2.5 focus:border-blue-500 outline-none'
                                />
                            )}
                        />
                    </div>
                    <div className="mt-5 md:mt-10">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-red-700 bg-red-100 px-4 py-2 text-sm font-medium text-red-700 mr-4 md:min-w-48 md:w-48 w-full mb-3 md:mb-0 hover:bg-red-700 hover:text-white hover:shadow-md"
                            onClick={reset} >
                            Limpar
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-green-700 bg-green-100 px-4 py-2 text-sm font-medium text-green-700 md:min-w-48 md:w-48 w-full hover:bg-green-700 hover:text-white hover:shadow-md">
                            Validar
                        </button>
                    </div>
                </form>
            ) : (
                valido ?
                    <CpfValido
                        cpf={cpf}
                        afterSubmit={() => {
                            setRetornoValidacao(false)
                            reset()
                        }} />
                    :
                    <CpfInvalido
                        cpf={cpf}
                        afterSubmit={() => {
                            setRetornoValidacao(false)
                            reset()
                        }} />
            )}
        </>
    )
}

export default Form