import React from "react";

function Profile() {
  return (
    <div className="flex mx-36 gap-5 mt-14">
      <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={`https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg`}
                    className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                  />
                </div>
              </div>
        
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                Jenna Stones
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        {" "}
        <div class="rounded-xl border p-5 shadow-md bg-white">
          <div class="flex w-full items-center justify-between border-b pb-3">
            <div class="flex items-center space-x-3">
              <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              <div class="text-lg font-bold text-slate-700">Joe Smith</div>
            </div>
            <div class="flex items-center space-x-8">
              <button class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                Category
              </button>
              <div class="text-xs text-neutral-500">2 hours ago</div>
            </div>
          </div>

          <div class="mt-4 mb-6">
            <div class="mb-3 text-xl font-bold">
              Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
            </div>
            <div class="text-sm text-neutral-600">
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between text-slate-500">
              <div class="flex space-x-4 md:space-x-8">
                <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>125</span>
                </div>
                <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
