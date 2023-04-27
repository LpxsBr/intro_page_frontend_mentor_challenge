import './lineButton.css';

function LineButton({...props}){

    return(
        <a className='a-btn' href={props.redirectTo || '#'}>
            {props.title || 'btn title'}
        </a>
    )
}

export default LineButton;