import './lineButton.css';

function LineButton({...props}){

    return(
        <a className='secondary-btn' href={props.redirectTo || '#'}>
            {props.title || 'btn title'}
        </a>
    )
}

export default LineButton;