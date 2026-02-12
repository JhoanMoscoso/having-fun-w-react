import {Link} from 'react-router-dom';

const ExerciseList = () => {

  return (
    <div className='grid grid-cols-3 txt-white txt-center mb-10'>
        <div className='col-span-1'>Vacia</div>
        <div className='col-span-1 overflow-y-auto'>
          <ul className='exercise-list'>
            <li><Link to="/badges-color">Basic UseState: Badge-color</Link></li>
            <li><Link to="/person-object">Props: Person object</Link></li>
            <li><Link to="">Ejercicio 3</Link></li>
            <li><Link to="">Ejercicio 4</Link></li>
            <li><Link to="">Ejercicio 5</Link></li>
            <li><Link to="">Ejercicio 6</Link></li>
            <li><Link to="">Ejercicio 7</Link></li>
            <li><Link to="">Ejercicio 8</Link></li>
            <li><Link to="">Ejercicio 9</Link></li>
            <li><Link to="">Ejercicio 10</Link></li>
          </ul>
        </div>
        <div className='col-span-1'>Vacia</div>
      </div>
  )

}

export default ExerciseList;