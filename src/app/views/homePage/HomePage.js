import Styles from "../../styles/App.module.scss";
import SectionOne from "../../components/homeComponents/sectionOne/SectionOne";
import SectionTwo from "../../components/homeComponents/sectionTwo/SectionTwo";

const HomePage = () => {
    return(
        <>
            <main className={Styles.dFlex}>
                <SectionOne/>
                <SectionTwo/>
            </main>
        </>
    )
}

export default HomePage;