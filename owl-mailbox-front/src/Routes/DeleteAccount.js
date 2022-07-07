import DeleteAccount from "../Components/MyPage/Setting/AccountAdmin/DeleteAccount";
import NavBot from "../Components/NavBot";

const DeleteAccountPresenter = () => {
    return (
        <>
        <NavBot name="회원탈퇴" />
        <DeleteAccount />
        </>

    )
}

export default DeleteAccountPresenter;