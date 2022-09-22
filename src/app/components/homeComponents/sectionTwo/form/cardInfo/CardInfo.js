import Styles from "../../../../../styles/App.module.scss";

const CardInfo = (props) => {
    const {number, firstName, date, expDate, cvc} = props;
    return(
        <>
            <div className={Styles.user_info}>
                <p className={Styles.user_info_number}>{number}</p>
                <div className={Styles.user_info_children}>
                    <div>
                        <p className={Styles.uppercase}>{firstName}</p>
                    </div>
                    <div>
                        <p>{date}/</p>
                    </div>
                    <div>
                        <p>{expDate}</p>
                    </div>
                </div>
            </div>
            <div className={Styles.user_cvc}>
                <p>{cvc}</p>
            </div>
        </>
    )
}

export default CardInfo;