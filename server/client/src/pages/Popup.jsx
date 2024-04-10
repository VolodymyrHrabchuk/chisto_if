import { useForm } from "react-hook-form";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { useEffect, useState } from "react";
import schema from "../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Cross } from "../assets/img/cross.svg";
import axios from "axios";
import PopupAfter from "../components/PopupAfter";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ open, onClose }) => {
  const [showThanks, setShowThanks] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
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
      const selectedCleaningTypes = Array.from(
        document.querySelectorAll('input[name="cleaningType"]:checked')
      ).map((input) => input.value);

      await axios.post(`${window.location.origin}/send-popup`, {
        name: data.name,
        phone: data.phone,
        cleaningType: selectedCleaningTypes,
        square: data.square,
        address: data.address,
        comments: data.comments,
      });
      setShowThanks(true);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
    reset();
  };

  const getFieldErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return errors[fieldName].message;
    }
    return "Очікуйте на дзвінок з підтвердженням у найближчий час";
  };

  const onCloseHandler = () => {
    reset();
    setShowThanks(false);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className='popup'
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {showThanks ? (
              <PopupAfter onClose={onCloseHandler} />
            ) : (
              <motion.div
                className='popup__block'
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
                <div className='popup__heading'>
                  <h3 className='popup__title'>Заповніть дані </h3>
                  <p className='popup__descr'>
                    {errors.name && <p>{getFieldErrorMessage("name")}</p>}
                    {errors.phone && <p>{getFieldErrorMessage("phone")}</p>}
                    {errors.address && <p>{getFieldErrorMessage("address")}</p>}
                    {errors.square && <p>{getFieldErrorMessage("square")}</p>}
                    {errors.cleaningType && (
                      <p>{getFieldErrorMessage("cleaningType")}</p>
                    )}
                  </p>
                  <Cross className='cross' onClick={onCloseHandler} />
                </div>
                <form
                  action='#'
                  className='popup__form'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className='popup__form-item'>
                    <input
                      type='text'
                      className='popup__form-input'
                      id='name'
                      name='name'
                      placeholder=' '
                      style={{
                        border: errors?.name
                          ? "1px solid #fb3030"
                          : "1px solid #4E4E4E",
                      }}
                      {...register("name")}
                    />

                    <label className='popup__form-label' htmlFor='name'>
                      <span className='popup__form-span'>Ім’я*</span>
                    </label>
                  </div>
                  <div className='popup__form-item'>
                    <input
                      type='text'
                      className='popup__form-input'
                      id='phone'
                      name='phone'
                      inputMode='numeric'
                      placeholder=' '
                      style={{
                        border: errors?.phone
                          ? "1px solid #fb3030"
                          : "1px solid #4E4E4E",
                      }}
                      {...register("phone")}
                    />
                    <label className='popup__form-label' htmlFor='phone'>
                      <span className='popup__form-span'>Телефон*</span>
                    </label>
                  </div>
                  <div className='popup__form-item'>
                    <Accordion className='popup__accordion'>
                      <AccordionItem eventKey='0'>
                        <Accordion.Header>Тип прибирання*</Accordion.Header>
                        <Accordion.Body>
                          <div className='popup__form-checkboxes'>
                            <div className='popup__form-check-wrap'>
                              <input
                                type='checkbox'
                                className='popup__form-check'
                                name='cleaningType'
                                id='general'
                                value='general'
                                {...register("cleaningType")}
                              />
                              <label
                                className='popup__form-label-check'
                                htmlFor='general'
                              >
                                Генеральне
                              </label>
                            </div>
                            <div className='popup__form-check-wrap'>
                              <input
                                type='checkbox'
                                className='popup__form-check'
                                name='cleaningType'
                                id='regular'
                                value='regular'
                                {...register("cleaningType")}
                              />
                              <label
                                className='popup__form-label-check'
                                htmlFor='regular'
                              >
                                Регулярне
                              </label>
                            </div>

                            <div className='popup__form-check-wrap'>
                              <input
                                type='checkbox'
                                className='popup__form-check'
                                name='cleaningType'
                                id='renovation'
                                value='renovation'
                                {...register("cleaningType")}
                              />
                              <label
                                className='popup__form-label-check'
                                htmlFor='renovation'
                              >
                                Післяремонтне
                              </label>
                            </div>
                            <div className='popup__form-check-wrap'>
                              <input
                                type='checkbox'
                                className='popup__form-check'
                                name='cleaningType'
                                id='commercial'
                                value='commercial'
                                {...register("cleaningType")}
                              />
                              <label
                                className='popup__form-label-check'
                                htmlFor='commercial'
                              >
                                Комерційне
                              </label>
                            </div>
                          </div>
                        </Accordion.Body>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className='popup__form-item'>
                    <input
                      type='text'
                      className='popup__form-input'
                      id='square'
                      name='square'
                      placeholder=' '
                      style={{
                        border: errors?.square
                          ? "1px solid #fb3030"
                          : "1px solid #4E4E4E",
                      }}
                      {...register("square")}
                    />
                    <label className='popup__form-label' htmlFor='square'>
                      <span className='popup__form-span'>
                        Величина приміщення*
                      </span>
                    </label>
                  </div>
                  <div className='popup__form-item'>
                    <input
                      type='text'
                      className='popup__form-input'
                      id='address'
                      name='address'
                      placeholder=' '
                      style={{
                        border: errors?.address
                          ? "1px solid #fb3030"
                          : "1px solid #4E4E4E",
                      }}
                      {...register("address")}
                    />
                    <label className='popup__form-label' htmlFor='address'>
                      <span className='popup__form-span'>
                        Адреса прибирання*
                      </span>
                    </label>
                  </div>
                  <div className='popup__form-item'>
                    <input
                      type='text'
                      className='popup__form-input popup__form-input--text'
                      id='comments'
                      name='comments'
                      placeholder=' '
                      {...register("comments")}
                    />
                    <label
                      className='popup__form-label popup__form-label--text'
                      htmlFor='comments'
                    >
                      <span className='popup__form-span '>Коментар</span>
                    </label>
                  </div>
                  <button
                    type='submit'
                    className='popup__form-btn'
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
    </>
  );
};

export default Popup;
