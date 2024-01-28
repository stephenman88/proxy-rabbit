import './Chatbox.scss';
import UserCard from '../UserCard/UserCard';
import send from '../../assets/icons/send_FILL0_wght400_GRAD0_opsz24.svg'
import back from '../../assets/icons/arrow_back_FILL0_wght400_GRAD0_opsz24.svg'

function Chatbox({user, recipient, messageList}){

    const user_window = (message, timestamp) => {
        return(<div className='user-message'>
            <p className='user-message__message'>{message}</p>
            <p className='user-message__timestamp'>{timestamp}</p>
        </div>)
    }

    const recipient_window = (message, timestamp) => {
        return(<div className='recipient-message'>
            <p className='recipient-message__message'>{message}</p>
            <p className='recipient-message__timestamp'>{timestamp}</p>
        </div>)
    }

    if(!recipient){
        return(<></>)
    }

    return(<section className='chatbox'>
        <div className='chatbox-recipient'>
            <div className='chatbox-recipient-container'>
                <div className='chatbox-recipient-container-left'>
                    <img src={back} alt="Back button" className='chatbox-recipient-container-left__button__back'/>
                    
                </div>
                <div className='chatbox-recipient-container-right'>
                    <h3 className='chatbox-recipient-container-right__name'>{recipient.first_name} {recipient.last_name}</h3>
                    <p className='chatbox-recipient-container-right__country'>{recipient.country_name}</p>
                </div>
            </div>
        </div>
        <div className='chatbox-messages'>
            {messageList.map(message => {
                if(message.from_id === user.id){
                    return user_window(message.messsage, message.timestamp)
                }else{
                    return recipient_window(message.message, message.timestamp)
                }
            })}
            {/*user_window("User's Message", 12983447)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
            {recipient_window("Recipient's Message", 12948558)}
        {recipient_window("Recipient's Message", 12948558)*/}
        </div>
        <form className='chatbox-form'>
            <div className='chatbox-form-container'>
                <textarea placeholder='Send a Message' className='chatbox-form-container__input'/>
                <button type='submit' className='chatbox-form-container__button'><img src={send} alt="Send button icon"/></button>
            </div>
        </form>
    </section>)
}

export default Chatbox