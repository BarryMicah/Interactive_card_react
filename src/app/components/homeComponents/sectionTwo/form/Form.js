import Styles from "../../../../styles/App.module.scss";
import DataJson from "../../../../data/data.json";
import { useForm } from "react-hook-form";
import CardInfo from "./cardInfo/CardInfo";
import { Navigate, Outlet } from "react-router-dom";

const Form = () => {
    const { register, watch,  handleSubmit, formState: { errors } } = useForm();
    const dataSectionTwo = DataJson.sectionTwoComponent;
    const firstName = watch('firstName');
    const number = watch('number');
    const expDate = watch('expDate');
    const date = watch('date');
    const cvc = watch('cvc');

    const onSubmit = () => {
        window.location = "/confirm";
        const isAuth = {'token': true}
        return isAuth.token ? <Outlet/> : <Navigate to="/confirm"/>
    }
    return(
        <>
            <CardInfo firstName={firstName} number={number} expDate={expDate} date={date} cvc={cvc}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.form}>
                    <div className={`${Styles.form_group} ${Styles.dFlex}`}>
                        <label htmlFor="name" className={Styles.uppercase}>{dataSectionTwo.label.name}</label>
                        <input type="text" maxLength={dataSectionTwo.form.limit.thirty} name="name" {...register("firstName", { required: true, maxLength: 15})} placeholder={dataSectionTwo.placeholder.name}/>
                        {errors.firstName && <p className={Styles.error}>{dataSectionTwo.form.error.firstName}</p>}
                    </div>
                    <div className={`${Styles.form_group} ${Styles.dFlex}`}>
                        <label htmlFor="number" className={Styles.uppercase}>{dataSectionTwo.label.number}</label>
                        <input type="tel" name="number" maxLength={dataSectionTwo.form.limit.sixteen}  {...register("number", {required: true, pattern:/^[0-9+-]+$/, minLength: 16, maxLength: 16})} placeholder={dataSectionTwo.placeholder.number}/>
                        {errors.number && <p className={Styles.error}>{dataSectionTwo.form.error.number}</p>}
                    </div>
                    <div className={`${Styles.form_group_bis} ${Styles.dFlex}`}>
                        <div className={Styles.dFlex}>
                            <label htmlFor="dateExp" className={Styles.uppercase}>{dataSectionTwo.label.exp_date}</label>
                            <input type="tel" name="dateExp" maxLength={dataSectionTwo.form.limit.two} {...register("expDate", {required: true, pattern:/^[0-9+-]+$/, minLength: 2, maxLength: 2})} placeholder={dataSectionTwo.placeholder.exp_date}/>
                            {errors.expDate && <p className={Styles.error}>{dataSectionTwo.form.error.expDate}</p>}
                        </div>
                        <div className={Styles.dFlex}>
                            <label htmlFor="date" className={Styles.uppercase}>{dataSectionTwo.label.date}</label>
                            <input type="tel" name="date" maxLength={dataSectionTwo.form.limit.two} {...register("date", {required: true, pattern:/^[0-9+-]+$/, minLength: 2, maxLength: 2})} placeholder={dataSectionTwo.placeholder.date}/>
                            {errors.date && <p className={Styles.error}>{dataSectionTwo.form.error.date}</p>}
                        </div>
                        <div className={Styles.dFlex}>
                            <label htmlFor="cvc" className={Styles.uppercase}>{dataSectionTwo.label.cvc}</label>
                            <input type="tel" name="cvc" maxLength={dataSectionTwo.form.limit.three} {...register("cvc", {required: true, pattern:/^[0-9+-]+$/, minLength: 3, maxLength: 3})} placeholder={dataSectionTwo.placeholder.cvc}/>
                            {errors.cvc && <p className={Styles.error}>{dataSectionTwo.form.error.cvc}</p>}
                        </div>
                    </div>
                    <input type="submit" value={dataSectionTwo.button}/>
                </div>
            </form>
        </>
    )
}

export default Form;