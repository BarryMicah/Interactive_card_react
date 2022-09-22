import Styles from "../../../styles/App.module.scss";
import logoComplete from "../../../assets/icon-complete.svg";
import DataJson from "../../../data/data.json";

const SectionOne = () => {
    const dataConfirm = DataJson.sectionOneComponentConfirm;
    const handleBack = () => {
        window.location = "/";
    }
    return(
        <section>
            <div className={`${Styles.dFlex} ${Styles.confirm}`}>
                <div>
                    <img src={logoComplete} alt="transaction complete"/>
                </div>
                <div>
                    <h1>{dataConfirm.text}</h1>
                </div>
                <div>
                    <form onClick={handleBack}>
                        <button type="button">{dataConfirm.back}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;