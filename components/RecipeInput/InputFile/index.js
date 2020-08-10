import { Camera } from "../../Icons";
import CloseIcon from "../../CloseIcon";
import { InputFileContainer, CameraUpload } from "./styles";

const InputFile = ({ imagePreview, onChange, onRemove }) => {
  return (
    <InputFileContainer src={imagePreview}>
      <label htmlFor="file">
        <input type="file" name="file" id="file" onChange={onChange} />
        {!imagePreview && (
          <CameraUpload>
            <Camera />
          </CameraUpload>
        )}
      </label>
      {imagePreview && (
        <CloseIcon top size="30px" color="black" onClick={onRemove} />
      )}
    </InputFileContainer>
  );
};

export default InputFile;
