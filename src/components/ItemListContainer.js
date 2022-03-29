import ItemCount from "./ItemCount"


const Container = ({props}) => {

    return (

        <>
            <div className="">
                <div className="container__Titulo row">
                    <h1 className="">{props}</h1>
                </div>
            </div>
            <ItemCount stock={5} initial={1}/>    
        </>

    )


}

export default Container