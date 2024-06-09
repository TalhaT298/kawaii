// /* eslint-disable no-unused-vars */
// import React from 'react';

// const Customer = () => {
//     return (
//         <div>
//             <div className="mx-auto  flex justify-center items-center ">
//         <h3 className="text-3xl text-gray-50 uppercase bg-pink-300 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
//         Client Feedback
//         </h3>
//       </div>

//       <div className="pl-10 font-[sans-serif] text-[#333]">
//             <div className="max-w-6xl mx-auto">
//                 <div className="">
                    
//                     <div className="flex space-x-4 items-end justify-end">
//                         <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                                
//                             </svg>
//                         </div>
//                         <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                                
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid lg:grid-cols-3 gap-12 mt-12">
//                     <div className="max-w-[360px] h-auto py-4 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
//                         <img src="https://readymadeui.com/profile_2.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-white" />
//                         <div>
//                             <h4 className="text-xl font-extrabold">John Doe</h4>
//                             <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
//                         </div>
//                         <div className="mt-4">
//                             <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//                         </div>
//                         <div className="flex space-x-2 mt-4">
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                     </div>

                    
//                     <div className="max-w-[360px] h-auto py-4 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
//                         <img src="https://readymadeui.com/profile_3.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-white" />
//                         <div>
//                             <h4 className="text-xl font-extrabold">Mark Adair</h4>
//                             <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
//                         </div>
//                         <div className="mt-4">
//                             <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//                         </div>
//                         <div className="flex space-x-2 mt-4">
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                     </div>
//                     <div className="max-w-[360px] h-auto py-4 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
//                         <img src="https://readymadeui.com/profile_4.webp" className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-white" />
//                         <div>
//                             <h4 className="text-xl font-extrabold">Simon Konecki</h4>
//                             <p className="mt-1 text-xs text-gray-400">Founder of Labar</p>
//                         </div>
//                         <div className="mt-4">
//                             <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//                         </div>
//                         <div className="flex space-x-2 mt-4">
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Customer;

import React from 'react';

const Customer = () => {
    return (
        <div>
            
        </div>
    );
};

export default Customer;