export default function Banner({name, description, image}:{
    name: string,
    description: string,
    image: string
}){ 
    return(
        <div className="flex flex-col items-center bg-dark border border-dark rounded-lg shadow md:flex-row">
            <img className="object-cover rounded-t-lg h-96 md:w-48 md:h-full md:rounded-none md:rounded-s-lg" src={image} alt="" />
            <div className="flex flex-col items-start p-4 leading-normal bg-dark">
                <h2 className="">{name}</h2>
                <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:max-w-md">
                    <p>{description}</p>
                </div>
            </div>
        </div>        
    )

}