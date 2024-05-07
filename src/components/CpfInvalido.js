import { AlertCircle } from 'react-feather'

const CpfInvalido = ({ cpf, afterSubmit }) => {
    return (
        <>
            <div className='grid grid-flow-col auto-cols-auto md:auto-cols-max space-x-4 my-6 w-full text-wrap text-xl'>
                <AlertCircle className='w-4 text-red-500 md:w-5' />
                <span className='mb-1 text-red-500'>O CPF {cpf}, não é válido</span>
            </div>
            <div className="mt-5 md:mt-10">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-slate-700 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 mr-4 w-full mb-3 md:mb-0 hover:bg-slate-700 hover:text-white hover:shadow-md"
                    onClick={() => { afterSubmit() }}>
                    Voltar
                </button>
            </div>
        </>
    )
}
export default CpfInvalido