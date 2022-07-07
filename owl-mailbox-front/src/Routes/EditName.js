import EditName from "../Components/Mypage/Setting/EditName";
import NavBot from "../Components/NavBot";

const EditNamePresenter = () => {
    return (
        <>
        <NavBot name="닉네임수정" />
        <EditName />
        </>

    )
}

export default EditNamePresenter;