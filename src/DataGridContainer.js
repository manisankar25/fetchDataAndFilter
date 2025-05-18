function DataGridContainer({ data }) {
    console.log('inside', data)
    return (

        <div className="outerDiv">
            {data.map((item, kye) => {
                return (<div className="singleBox">
                    <h2>{item.name}</h2>
                    <h3>{item.email}</h3>
                    <h4>{item.company.name}</h4>
                </div>)
            })}
        </div>)
}
export default DataGridContainer;