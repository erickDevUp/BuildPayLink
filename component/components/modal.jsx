import styles from "../../styles/Home.module.scss";
const Modal = ({ children, id }) => {
  return (
    <div
      className="modal fade"
      id={id}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className={styles.modal_dialog + " modal-dialog modal-dialog-centered"}
      >
        <div className={styles.modal_content + " modal-content"}>
          <div className={styles.modal_header + " modal-header fixed-top"}>
            <h5 className="modal-title" id="exampleModalLabel">
            </h5>
            <i
              className={styles.close_modal_icon + " bx bx-x "}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>

          <div className="modal-body d-flex justify-content-center py-4 pb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
