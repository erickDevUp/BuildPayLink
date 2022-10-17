import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import styles from "../../../styles/Home.module.scss";

const {success_toast,toast_container} = styles;
const thestyle = success_toast+' '+toast_container;

function Payment(props) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const copy = () => {
    let value = props.value;
    navigator.clipboard.writeText(value);
    toggleShow(); /* once the text is copied to the clipboard the toast is shown */
  };

  return (
    <>
      {/* The toast element requires a container for certain properties to be applied */}
      <ToastContainer position="bottom-end" className={thestyle+" mb-3"}>
        <Toast
          animation={true}
          autohide={true}
          delay="3000"
          bg="dark"
          onClose={toggleShow}
          show={show}
          className={styles.toast}
        >
          <Toast.Header className={styles.toast_header+' toast-header'} closeButton={true} closeLabel="Close">
            <b className="me-auto">Text copied to clipboard</b>
          </Toast.Header>
        </Toast>
      </ToastContainer>

      <div className="w-100">
        <div
          className={
            styles.payment_btn +
            " d-flex justify-content-between align-items-center"
          }
        >
          <img
            src={props.img}
            alt={props.label + " logo"}
            className={styles.payment_img}
          />
          <div className={styles.payment_label + " mx-2 flex-grow-1 "}>
            {props.label}
          </div>
          <div>
            <button
              className={styles.payment_action_btn + " btn btn-sm mx-0"}
              onClick={copy}
            >
              <i
                className={styles.payment_action_icon + " bx bx-copy copy-icon"}
              ></i>
            </button>
            <button
              className={styles.payment_action_btn + " btn btn-sm mx-0"}
              data-bs-toggle="modal"
              data-bs-target={"#" + props.id}
            >
              <i
                className={styles.payment_action_icon + " bx bx-qr copy-icon "}
              ></i>
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id={props.id}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className={styles.modal_dialog+" modal-dialog modal-dialog-centered"}>
            <div className={styles.modal_content+' modal-content'}>
              <div className={styles.modal_header+" modal-header"}>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img
                    src={props.img}
                    width="40"
                    height="40"
                    className="mx-2"
                    alt={props.label + " logo"}
                  />{" "}
                  {props.label}
                </h5>
                <i
                  className={styles.close_modal_icon+" bx bx-x "}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></i>
              </div>
              <div className="modal-body d-flex justify-content-center py-4 pb-0">
                <div className={styles.qr_container+" p-2"}>
                  <QRCodeSVG value={props.value} size="200" />
                </div>
              </div>
              <button
                type="button"
                className={styles.btn_primary+" btn mx-5 my-5 mt-5"}
                aria-label="Close"
                onClick={copy}
              >
                <i className="bx bx-copy mx-2"></i>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
