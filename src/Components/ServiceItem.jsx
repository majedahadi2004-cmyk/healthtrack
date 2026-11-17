import '../Styles/ServiceItem.css'

const ServiceItem =({
    img = "",
    title = 'Default',
    desc = 'No description'
})=>{
    return(
        <div className='ServiceItem'>
            <div style={{backgroundImage: `url(${img})`}}></div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}
export default ServiceItem;
