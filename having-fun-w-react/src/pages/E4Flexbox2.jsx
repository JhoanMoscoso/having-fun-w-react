import FbLogo from '../assets/icons8-facebook.svg';
import GoogleStore from '../assets/Google_Play_Store.svg';
import AppStore from '../assets/appstore.svg';

const E4Flexbox2 = () =>{
    return (
        <div className="bg-white flex justify-center h-screen">
            <div>
                <div className="border border-solid border-slate-300 mt-20 h-115 px-12">
                    <div className="flex flex-col my-10 p-7">
                        <div><span className="text-slate-900 text-3xl">DummyInstagram</span></div>
                    </div>

                    <div className="flex flex-col px-5 mb-8">
                        <input className="igInput mb-2" placeholder="Phone number, username, or email" />
                        <input className="igInput" placeholder="Password" />
                    </div>

                    <div className="flex justify-center">
                        <button className="igLoginBtn">
                            Log in
                        </button>
                    </div>
                    <hr />OR
                    <div className='flex flex-col justify-center'>
                        <a className="fbLink mb-3"><img src={FbLogo} alt="Facebook logo" className="inline-block w-5 h-5 mr-2" />Log in with Facebook</a>
                        <a className="fbLink"><span>Forgot password?</span></a>
                    </div>
                </div>

                <div className="border border-solid border-slate-300 mt-5 h-20 flex justify-center items-center">
                    <span className='text-slate-800'>Don't have an account? <a>Sign Up</a></span>
                </div>
                <div className='flex justify-center items-center h-8 mt-5 text-slate-800'><span>Get the app.</span></div>
                <div className='flex justify-center items-center h-20'>
                        <img src={AppStore} alt="App Store" className='inline-block w-42 mr-2' />
                        <img src={GoogleStore} alt="Google Play Store" className='inline-block w-42 mr-2' />

                </div>
            </div>
        </div>
    )

}
export default E4Flexbox2;

