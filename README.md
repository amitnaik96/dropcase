## **Dropcase** 
DropCase is a multi-user file-sharing system that allows users to upload, download, and manage their files securely.

## **Tech Stack**  
- **Frontend**: Next.js, TailwindCSS  
- **Backend**: Node.js, Express.js, Prisma ORM  
- **Database**: PostgreSQL (Supabase)    
- **File Storage**: Cloudflare R2

## **Architecture**  
![Architecture](https://raw.githubusercontent.com/amitnaik96/dropcase/main/apps/web/public/build.png)  

## **Installation**  

### **Local**
```bash
    # clone the repo
    git clone https://github.com/amitnaik96/dropcase.git
    cd dropcase

    # install dependencies and add .env file (refer .env.example in /apps and /packages)
    pnpm install
    
    # run
    pnpm run dev
```

## License
Distributed under the [MIT](https://github.com/amitnaik96/dropcase/blob/main/LICENSE) License .