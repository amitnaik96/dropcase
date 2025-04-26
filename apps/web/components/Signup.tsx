import { SignupCard } from './SignupCard';

export const Signup = () => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center gap-20 mt-40 mb-40">
            <div className="text-4xl font-bold flex flex-col justify-center">
                        <div>Your <span className="text-blue-900">files,</span></div>
                        <div>Your <span className="text-blue-900">control.</span></div>
                        <div>Join <span className="text-blue-900">DropCase</span> now.</div>
            </div>
            <SignupCard />
        </div>
    </div>
  );
};

