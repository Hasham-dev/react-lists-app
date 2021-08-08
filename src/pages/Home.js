import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function Home () {
  return (
    <>
      <div>
        <h1 className='title'>Homepage</h1>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link to='lists'>
          <span className='btn'>See Listing</span>
        </Link>
      </div>
    </>
  )
}
