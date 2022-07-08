import NavBot from "../Components/NavBot";
import ListView from "../Components/ViewPage/ListView";

const SentListViewPresenter = () => {
    return (
        <>
        <NavBot name="보낸 편지함" />
        <ListView />
        </>

    )
}

export default SentListViewPresenter;