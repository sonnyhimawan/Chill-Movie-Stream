import { useRef, useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import useAuthStore from "../store/authstore";
import BtnPrimary from "../components/atoms/button/BtnPrimaryWithIcon";

const Profil = () => {
  const { user } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  };

  return (
    <HomeLayout>
      <section className="pt-16">
        <div className="px-8 py-8 sm:py-10 lg:py-16 sm:px-10 lg:px-16 relative bg-background gap-8 flex flex-col">
          <h1 className="text-1xl sm:text-3xl md:text-3xl lg:text-4xl font-medium font-myFont text-white">
            Profil Saya
          </h1>

          <div className="flex flex-row items-center gap-4">
            <img
              src={preview || user?.avatar || "assets/img/user.png"}
              alt="user-profile"
              className="w-[140px] h-[140px] rounded-lg object-cover"
            />

            <div className="flex flex-col gap-4">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />

              <BtnPrimary
                type="button"
                onClick={handleUploadClick}
                className="border border-LightPrimary px-6 py-3 hover:cursor-pointer text-sm font-medium font-myFont text-LightPrimary text-center rounded-full flex items-center justify-center gap-2"
                label="Upload"
              />

              <span className="flex flex-row items-center font-myFont text-sm text-gray-300 gap-2">
                Maksimal 2MB
              </span>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Profil;
