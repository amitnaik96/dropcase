## **Dropcase** 
DropCase is a multi-user file-sharing system that allows users to upload, download, and manage their files securely.

## **Tech Stack**  
- **Frontend**: Next.js, TailwindCSS  
- **Backend**: Node.js, Express.js, Prisma ORM  
- **Database**: PostgreSQL (Supabase)    
- **File Storage**: Cloudflare R2

## **Architecture**  
![Architecture]()  

## **Installation**  

### **Local**
```bash
    # clone the repo
    git clone https://github.com/amitnaik96/dropcase.git
    cd dropcase

    # install dependencies and add .env file (refer .env.example in web, api, db)
    pnpm install
    
    # run the backend  
    pnpm run dev
```