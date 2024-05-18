const DelCard = (props)=> {
    let del = props.del;
    return (
        <div className="flex flex-col items-center space-y-6">
            <img height="250px" width='300px' src={del.img} />
            <p> {del.title} </p>
        </div>
    )
}
export default DelCard;