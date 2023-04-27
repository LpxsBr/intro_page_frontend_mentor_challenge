import './filledButton.css';

function FilledButton({...props}){

    return(
        <a className='primary-btn' href={props.redirectTo || '#'}>
            {props.title || 'btn title'}
        </a>
    )
}

export default FilledButton;