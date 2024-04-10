import { ReactComponent as PatternThnks } from "../assets/img/thnks.svg";
import { ReactComponent as Cross } from "../assets/img/cross.svg";

const PopupAfter = ({onClose }) => {
  
  return (
    <>
      <div className="popup-thnks" onClick={onClose}>
        <div className="popup-thnks__content">
          <Cross className="cross thnks" onClick={onClose} />
          <h3 className="popup-thnks__title">Дякуємо за вашу заявку!</h3>
          <p className="popup-thnks__descr">
            Зовсім скоро ми зв’яжемось з вами. Нам знадобиться день для
            опрацювання вашого запиту.
          </p>
        <PatternThnks className="popup-thnks__pattern" />
        </div>
      </div>
    </>
  );
};

export default PopupAfter;
