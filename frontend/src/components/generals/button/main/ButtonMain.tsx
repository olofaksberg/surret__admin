import { Styled } from './buttonMain.styled';
import { IButtonMainProps } from './buttonMain.types';

export const ButtonMain = (props: IButtonMainProps) => {
  const {buttonType, text, action} = props;

  return (
    <Styled.Button {...props}
    onClick={action}
    >
      {text} <span className="icon"><i className={`${buttonType.iconClass} FC-white`}></i></span>
    </Styled.Button>
  )
}



  // const [contentData, setContentData] = useState<Record<string, any>>({
  //   text: `${content.text}`,
  //   icon: <i className={`fa-solid ${content.icon} FC-white`}></i>,
  // });

// useEffect(()=>{
//   switch (content.type) {
//     case "add":
//       return setContentData((prev) => {
//         return {
//           ...prev,
//           icon: <i className="fa-solid fa-plus FC-white"></i>
//         }
//       });
//     case "edit":
//       return setContentData((prev) => {
//         return {
//           ...prev,
//           icon: <i className="fa-solid fa-gear FC-white"></i>
//         }
//       });
//     case "remove":
//       return setContentData((prev) => {
//         return {
//           ...prev,
//           icon: <i className="fa-solid fa-xmark FC-white"></i>
//         }
//       });
//     case "confirm":
//       return setContentData((prev) => {
//         return {
//           ...prev,
//           icon: <i className="fa-solid fa-check FC-white"></i>
//         }
//       });
//     case "delete":
//       return setContentData((prev) => {
//         return {
//           ...prev,
//           icon: <i className="fa-solid fa-trash-can FC-white"></i>
//         }
//       });
//     default:
//       break;
//   };
// },[])