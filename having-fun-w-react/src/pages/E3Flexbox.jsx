import SampleCode from '../components/SampleCode.jsx';
import codeSnippet from '../code-samples/e3-flexbox.txt?raw'
const E3Flexbox = () =>{
    return (
        <>
            <div className="flex justify-between px-50 text-lefts">
                <div className="flex flex-col">
                    <div className="flex flex-col mb-10">
                        <div>
                            <span className="text-3xl text-left">DummyFooter</span>
                        </div>
                        <div>
                            c 2023 Machgrowth tm <br />
                            by SpatialGinkgo
                        </div>
                    </div>
                    <div>
                        <a><span>Terms of Service</span></a> | <a><span>Privacy Policy</span></a> 
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl text-blue-300 mb-3">About</span>
                    <span className="text-base text-slate-300">Features</span>
                    <span className="text-base text-slate-300">Frequent questions</span>
                    <span className="text-base text-slate-300">Sitemap</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-2xl text-blue-300 mb-3">Product</span>
                    <span className="text-base text-slate-300">Course Contents</span>
                    <span className="text-base text-slate-300">Premium</span>
                    <span className="text-base text-slate-300">Sign In</span>
                </div>

            </div>
            <div className='absolute bottom-0 left-0 right-0'>
                <span className='txt-left'>Code Snippet</span>
                <SampleCode code={codeSnippet} />
            </div>
        
        
        
        
        </>
        
    )
}

export default E3Flexbox;