const SampleCode = (props) =>{
    const {code} = props
    return(
        <div className="bg-black txt-code rounded-lg p-6 overflow-y-auto h-100">
            <pre className="overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    )
};

export default SampleCode;