
const Form = ({addUsuario}) => {
    const safeSubmit = () => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        addUsuario ({name, email}) 
    }

    return <form onSubmit={safeSubmit} className="h-full flex flex-col justify-center items-center gap-10 -mt-20 mx-5">
        <input className="alura-input" type="text" placeholder="Insira seu nome..." required />
        <input className="alura-input" type="email" placeholder="Insira seu e-mail..." required />
        <button type="submit" className="py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase w-full max-w-sm outline-none hover:shadow-md hover:shadow-gray-500 dark:hover:shadow-black hover:animate-pulse"> Seguir </button>
    </form>
}

export default Form;

