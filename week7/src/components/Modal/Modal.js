import "./Modal.css";
import buttonClose from "../../assets/button-close.svg";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalShare from "./ModalShare";
import ModalLinkAdd from "./ModalLinkAdd";
import ModalFolderAdd from "./ModalFolderAdd";

const Modal = ({
  folderData,
  folderMenus,
  title,
  isShowModal,
  linkAddModal,
  folderAddModal,
  shareModal,
  editModal,
  deleteModal,
  linkDeleteModal,
  dataUrl,
  menusId,
}) => {
  const handleClickExit = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    }));
  };
  return (
    <div className="modal">
      <div
        className={linkAddModal ? "modal-container" : "small-modal-container"}
      >
        <h2 className="modal-title">{title}</h2>
        <a className="modal-button-close" href="/" onClick={handleClickExit}>
          <img src={buttonClose} alt="닫기" />
        </a>
        {linkDeleteModal ? <ModalDelete link={dataUrl} /> : null}
        {deleteModal ? <ModalDelete title="폴더 삭제" /> : null}
        {editModal ? <ModalEdit /> : null}
        {shareModal ? <ModalShare menusId={menusId} /> : null}
        {folderAddModal ? <ModalFolderAdd /> : null}
        {linkAddModal ? (
          <ModalLinkAdd folderData={folderData} folderMenus={folderMenus} />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
