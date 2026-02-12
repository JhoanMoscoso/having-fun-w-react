import {useState} from 'react';
import SampleCode from '../components/SampleCode.jsx';
import codeSnippet from '../code-samples/e1-badges-color.txt?raw'

const E1BadgesColor = () => {
    const [badgecolor,setBadgeColor] = useState('aqua');
    return (
        <>
            <div className="mb-10">
                <span className={`px-5 py-5 bg-${badgecolor} rounded-50 text-black`}>CAMBIAME DE COLOR</span>
            </div>


            <div className="grid grid-cols-3 gap-4 mb-8 mx-auto">
                <button className="rounded bg-aqua text-black"
                    onClick={()=>{setBadgeColor("aqua")}}
                >AQUA</button>

                <button className="rounded bg-coral"
                onClick={()=>{setBadgeColor("coral")}}
                >CORAL</button>

                <button className="rounded bg-wheat"
                onClick={()=>{setBadgeColor("wheat")}}
                >WHEAT</button>
            </div>
            <div className='absolute bottom-0 left-0 right-0'>
                <span className='txt-left'>Code Snippet</span>
                <SampleCode code={codeSnippet} />
            </div>
            
        </>

    )
};

export default E1BadgesColor;