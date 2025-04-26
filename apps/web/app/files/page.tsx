import { Files } from '@/components/Files';
import { HeaderFile } from '@/components/HeaderFile';
import { Yourfiles } from '@/components/Yourfiles';

export default function FilesPage() {
    return <div className="font-[family-name:var(--font-geist-sans)]">
        <HeaderFile />
        <Files />
        <Yourfiles />
    </div>  
}