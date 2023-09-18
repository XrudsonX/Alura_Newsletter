const Article = ({ title, text, tags, image, alt }) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 rounded-xl sm:shadow-lg flex flex-col items-center gap-2 sm:hover:shadow-gray-500 sm:dark:hover:shadow-black sm:hover:shadow-lg ">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full sm:flex justify-end gap-2 pr-5 hidden ">
            {
                tags.map(tag => <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full font-bold text-gray-200 hover:bg-alura-200 hover:scale-110 cursor-default">{tag}</span>)
            }
        </div>
        <div className="grid gap-2">
            {
                text.map((paragrafo, index) => <p key={index} className="text-alura-200 dark:text-gray-400">{paragrafo}</p>)
            }
        </div>
    </div>
}

export default Article;