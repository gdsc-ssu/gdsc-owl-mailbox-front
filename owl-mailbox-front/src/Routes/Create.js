// import NavBot from "../Component/SmallComponents/NavBot";
// import Navbar from "../Component/Navbar";
// import { navbotIcons } from "../assets/Resources";

// const EventPresenter = () => {
//   return (
//     <>
//       <Navbar />
//       <NavBot Icon={navbotIcons.announce} Name="학부행사" />
//       <Event />
//     </>
//   );
// };

// export default EventPresenter;
import Create from "../Components/Create";
import NavBot from "../Components/NavBot";

const CreatePresenter = () => {
    return (
        <>
        <NavBot Name="편지 작성" />
        <Create />
        </>

    )
}

export default CreatePresenter;