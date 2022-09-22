import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/data.json";

const SectionOne = () => {
    const dataSectionOne = DataJson.sectionOneComponent;
    return(
        <section>
            <div className={`${Styles.bg_main} ${Styles.dFlex}`}>
                {dataSectionOne.card.map((data, i) => {
                    return(
                        <div className={Styles.bg_main_card} key={i}>
                            <img src={require(`../../../assets/${data.name}`)} alt={data.name}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionOne;