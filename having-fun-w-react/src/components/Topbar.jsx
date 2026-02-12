import {Link} from 'react-router-dom';
const Topbar = () =>{
    return (
        <div className="w-100 mx-auto mb-10 text-center">
            <Link to="/"><span className='btn-menu'>Inicio</span></Link>
        </div>

    )

}

export default Topbar;