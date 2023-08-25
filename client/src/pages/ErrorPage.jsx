import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReactComponent as Error } from "../assets/img/error.svg";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="error-wrap">
        <h2 className="heading error-text">Вибачте, цю сторінку ми ще прибираємо</h2>
        <Error className="err-pic"/>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
