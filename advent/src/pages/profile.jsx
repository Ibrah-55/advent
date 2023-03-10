import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-2 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className=" flex justify-center mt-2  w-40">
                      <Avatar
                        src="/img/profile.jpeg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                          <span class="top-2 right-10 absolute  w-3.5 h-3.5 bg-green-400 border-1 border-white dark:border-gray-800 rounded-full"></span>

                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400"><a href="https://api.whatsapp.com/send?phone=+254707486233">Connect</a></Button>
                </div>
             
              </div>
              <div className="mt-2 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
Davideo                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className=" h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Nairobi, Kenya
                  </Typography>
                  <br />
                  <BriefcaseIcon className=" h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Producer  -- Avent Films
                  </Typography>
                </div>
                
                {/* <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div> */}
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      David is a music producer with over 7 years of experience in the industry. He has a strong background in music theory, composition, and audio engineering.
                      In addition to his music production work, he is also a skilled audio engineer. He is proficient in using digital audio workstations (DAWs) 
                      and audio plugins to create high-quality music recordings. He is also familiar with different audio formats and can optimize recordings for various platforms and devices.
                    </Typography>
                    <Button variant="text">Show more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
