import './Details.css'

export default function Details(props) {
    console.log(props)
    return (
        <div className='Details'>
            <h1>{props.movieDetails.title}</h1>
        </div>
    )
}