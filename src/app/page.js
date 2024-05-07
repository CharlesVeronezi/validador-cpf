import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <div className="relative py-16 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-10">
                <h2 className="my-4 text-2xl text-cyan-900 font-bold text-center">VALIDAR CPF</h2>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
