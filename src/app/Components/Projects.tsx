export default function Project({title, type, role, engine, description, image}: {
    title: string,
    type: string,
    role: string,
    engine: string,
    description: string,
    image: string
}) {
    return(
        <div className="card mb-3">
            <div className="card-header bg-dark text-white border-bottom-custom">
                <h2>{title}</h2>
            </div>
            <div className="card-body row bg-dark text-white m-0">
                <div className="col-7">
                    <ul>
                        <li>Type: {type}</li>
                        <li>Role: {role} </li>
                        <li>Engine: {engine}</li>
                    </ul>
                </div>
                <div className="col-5">
                    <img src={image} alt="" style={{maxHeight: '320px'}} className="w-100"/>
                </div>              
            </div>
        </div>
    )
}