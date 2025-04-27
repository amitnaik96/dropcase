import { UploadFile } from "./UploadFile";
import { Header} from './Header';
import { YourFiles } from './YourFiles';

export const Files = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
            <Header />
            <UploadFile />
            <YourFiles />
        </div>  
  );
};
