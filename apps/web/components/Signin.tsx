import { SigninCard } from './SigninCard';

export const Signin = () => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center gap-20 mt-40 mb-40">
            <div className="text-4xl font-bold flex flex-col justify-center">
                <div>Welcome back to</div>
                <div className="text-blue-900">Dropcase.</div>
            </div>
            <SigninCard />
        </div>
    </div>
  );
};

