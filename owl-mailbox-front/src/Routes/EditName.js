import EditName from "../Components/MyPage/EditName"
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