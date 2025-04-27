import { UploadFile } from "./UploadFile";
import { HeaderFile} from './HeaderFile';
import { YourFiles } from './YourFiles';

export const Files = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
            <HeaderFile />
            <UploadFile />
            <YourFiles />
        </div>  
  );
};
