import './withoutLineButton.css';

function WithoutLineButton({...props}){

    return(
        <a className='w-line-btn' href={props.redirectTo || '#'}>
            {props.title || 'btn title'}
        </a>
    )
}

export default WithoutLineButton;