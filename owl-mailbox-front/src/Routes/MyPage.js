import MyPageMain from "../Components/MyPage/MyPageMain";
import NavBot from "../Components/NavBot";

const MyPagePresenter = () => {
    return (
        <>
        <NavBot name="마이페이지" />
        <MyPageMain />
        </>

    )
}

export default MyPagePresenter;