
// imports
// - general
import Compressor from "compressorjs";
import { v4 as uuid } from "uuid";
// - components
import { If } from "../../../helpers";
// - style
import { Styled } from "./inputImage.styled";
import { IInputImageProps } from "./inputImage.types";
// ---

export const InputImage = (props: IInputImageProps) => {
    const { imageSrc, reference, action } = props;
  const imageChosen = (e: any) => {
    const file = e.target.files[0];
    const newImgId = uuid();
    new Compressor(file, {
      quality: 0.6,
      success(result) {
        let newFile = new File(
          [result],
          newImgId + "." + file.type.split("/")[1],
          {
            type: file.type,
          }
        );
        let reader = new FileReader();
        reader.onload = (ev) => action(ev, newFile);
        reader.readAsDataURL(result);
      },
      error(err) {
        throw err;
      },
    });
  };

  return (
    <Styled.Div {...props}>
      <If condition={imageSrc}>
        <img className="data-img" src={imageSrc} />
      </If>
      <div className="flex JC-C img-upload">
        <section className="flex">
          <label className="login-label">Bild: </label>
          <input
            className="file-upload"
            name="image"
            type="file"
            ref={reference}
            onChange={(e) => imageChosen(e)}
          />
        </section>
      </div>
    </Styled.Div>
  );
};
