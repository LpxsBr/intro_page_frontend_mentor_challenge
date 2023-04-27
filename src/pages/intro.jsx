import FilledButton from '../components/buttons/filledButton';
import './intro.css'

function Intro(){
    return (
        <main className='main'>
            <div className="intro">
                <div className="text">
                    <h1 className='heading-text-1'>
                        Make remote work
                    </h1>
                    <p className='paragraph-1'>
                        Get your team in sync, mo matter your location.
                        Streamline processes, create team rituals,  and
                        watch produtivity soar.
                    </p>
                    
                    <FilledButton title={'Learn more'}/>
                    
                    <div className="client">
                        <img src="./images/client-databiz.svg" alt="client " className="client" />
                        <img src="./images/client-audiophile.svg" alt="client " className="client" />
                        <img src="./images/client-meet.svg" alt="client " className="client" />
                        <img src="./images/client-maker.svg" alt="client " className="client" />
                    </div>
                </div>
                <div className="image">
                    <img src="./images/image-hero-desktop.png"/>
                </div>
            </div>
        </main>
    )
}

export default Intro;