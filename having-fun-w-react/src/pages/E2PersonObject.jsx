import SampleCode from '../components/SampleCode.jsx';
import codeSnippet from '../code-samples/e2-person-object.txt?raw'

const Person = (props)=>{
    const {name, age, profession, petName} = props;
    return(
        <div className="mb-10">
            <div className="pName">{name}</div>
            <div className="grid grid-cols-2 mx-5 mb-2">
                <div className="col-span-1">Age: {age}</div>
                <div className="col-span-1">Profession: {profession}</div>
                <div className="col-span-1">Pet Name: {petName}</div>
            </div>
            <hr className="w-200 mx-auto"/>
        </div>
    )  
}

const PersonObject = ()=>{
    return(
        <div className="">
            <Person name="Pepe" age="22" profession="Carpenter" petName="Pedro" />
            <Person name="Alejandra" age="35" profession="Cashier" petName="Luna" />
            <Person name="Felix" age="18" profession="Student" petName="Yummy" />
            <div className='absolute bottom-0 left-0 right-0'>
                <span className='txt-left'>Code Snippet</span>
                <SampleCode code={codeSnippet} />
            </div>
        </div>
        

    )
};
export default PersonObject;