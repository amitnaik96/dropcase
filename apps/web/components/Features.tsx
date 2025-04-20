import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const ft = [
    {
        title: "Upload and share files securely",
        description: "Secure file sharing made simple."
    }, {
        title: "Access from anywhere",
        description: "Works on any device, fully responsive design."
    }, {
        title: "Privacy-first",
        description: "(powered by Cloudflare R2 & Supabase)"
    }
]
let counter = 1;

export const Features = () => {
    return <div className="flex justify-center">
        <div className="w-300 flex justify-center my-20">
            <div className="flex gap-4">
                    {ft.map((f:any) => <CardComponent key={counter++} title={f.title} description={f.description}/>)}
            </div>
        </div>
    </div>
}

const CardComponent = ({title, description}: {title: string, description: string}) => {
    return  <Card className="w-[320px] h-[200px]">
                <CardHeader>
                    <CardTitle className="text-xl w-50 mt-5">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
}