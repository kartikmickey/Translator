const Languageoption = (props) => {
    return(
        <div style={{marginTop:'50px'}}>
            <select style={{width: "50%", margin: "auto", height: "45px", fontSize: "20px", padding: "10px"}} onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
    )
}
export default Languageoption;