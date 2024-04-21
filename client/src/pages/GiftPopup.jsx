import { useForm } from "react-hook-form";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { useEffect, useState } from "react";
import giftSchema from "../schema/giftSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as CrossPic } from "../assets/img/cross.svg";
import PopupAfter from "../components/PopupAfter";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const GiftPopup = ({ open, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(giftSchema),
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = async (data) => {
    try {
      await axios.post("http://64.226.112.135/send-sert", {
        firstName: data.firstName,
        phoneNumber: data.phoneNumber,
        sumSertificate: data.sumSertificate,
        squareSertificate: data.squareSertificate,
        notes: data.notes,
      });
      setShowPopup(true);
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  const getFieldErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return errors[fieldName].message;
    }
    return "Очікуйте на дзвінок з підтвердженням у найближчий час";
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    reset();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="popup"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {showPopup ? (
            <PopupAfter onClose={handleClosePopup} />
          ) : (
            <motion.div
              className="popup-gift__block"
              initial={{ y: -50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.3, delay: 0.1 },
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                  transition: { ease: "easeIn", duration: 0.2 },
                }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-gift__heading">
                <h3 className="popup-gift__title">Заповніть дані </h3>
                <p className="popup-gift__descr">
                  {errors.firstName && (
                    <p>{getFieldErrorMessage("firstName")}</p>
                  )}
                  {errors.phoneNumber && (
                    <p>{getFieldErrorMessage("phoneNumber")}</p>
                  )}
                </p>
                <CrossPic className="cross" onClick={onClose} />
              </div>
              <form
                action="#"
                className="popup-gift__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="popup-gift__form-item">
                  <input
                    type="text"
                    className="popup-gift__form-input"
                    id="firstName"
                    name="firstName"
                    placeholder=" "
                    style={{
                      border: errors?.firstName
                        ? "1px solid #fb3030"
                        : "1px solid #4E4E4E",
                    }}
                    {...register("firstName")}
                  />

                  <label className="popup-gift__form-label" htmlFor="firstName">
                    <span className="popup-gift__form-span">Ім’я*</span>
                  </label>
                </div>
                <div className="popup-gift__form-item">
                  <input
                    type="text"
                    className="popup-gift__form-input"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder=" "
                    style={{
                      border: errors?.phoneNumber
                        ? "1px solid #fb3030"
                        : "1px solid #4E4E4E",
                    }}
                    {...register("phoneNumber")}
                  />
                  <label
                    className="popup-gift__form-label"
                    htmlFor="phoneNumber"
                  >
                    <span className="popup-gift__form-span">Телефон*</span>
                  </label>
                </div>
                <div className="popup-gift__form-item">
                  <Accordion className="popup-gift__accordion">
                    <AccordionItem eventKey="0">
                      <Accordion.Header>Тип сертифікату*</Accordion.Header>
                      <Accordion.Body>
                        <div className="popup-gift__form-checkboxes">
                          <div className="popup-gift__form-check-wrap">
                            <input
                              type="checkbox"
                              className="popup-gift__form-check"
                              name="sumSertificate"
                              id="sumSertificate"
                              value="sumSertificate"
                              {...register("sumSertificate")}
                            />
                            <label
                              className="popup-gift__form-label-check"
                              htmlFor="sumSertificate"
                            >
                              На суму (вкажіть суму в коментарі)
                            </label>
                          </div>
                          <div className="popup-gift__form-check-wrap">
                            <input
                              type="checkbox"
                              className="popup-gift__form-check"
                              name="squareSertificate"
                              id="squareSertificate"
                              value="squareSertificate"
                              {...register("squareSertificate")}
                            />
                            <label
                              className="popup-gift__form-label-check"
                              htmlFor="squareSertificate"
                            >
                              На площу (вкажіть площу і тип житла або кімнати в
                              коментарі)
                            </label>
                          </div>
                        </div>
                      </Accordion.Body>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="popup-gift__form-item">
                  <input
                    type="text"
                    className="popup-gift__form-input popup-gift__form-input--text"
                    id="notes"
                    name="notes"
                    placeholder=" "
                    {...register("notes")}
                  />
                  <label
                    className="popup-gift__form-label popup-gift__form-label--text"
                    htmlFor="notes"
                  >
                    <span className="popup-gift__form-span ">Коментар</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="popup-gift__form-btn"
                  disabled={!isValid}
                >
                  Відправити
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GiftPopup;
