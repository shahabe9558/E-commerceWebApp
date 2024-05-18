const ViewIn = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-white">
      {/* head section */}
      <div className="flex w-[100%] h-[100vh]">
        {/* left part  */}
        <div className="w-[50%] h-[85.4%] bg-grey-120 flex justify-center items-center text-white">
          <div className=" w-[55%] flex flex-col space-y-8">
            <h1 className=" w-[110%] text-6xl font-semibold space-y-3">
              <p>SEE IT,</p>
              <p>IN YOUR ROOM</p>
            </h1>
            <div className="text-3xl w-[80%] space-y-3">
              <p>Experience our AR Tool</p>
              <p> to Visualise Rugs in</p>
              <p> Your Space</p>
            </div>
            <button className="border p-2 w-[40%] text-xl">Try Now</button>
          </div>
        </div>
        {/* right part  */}
        <div className="w-[50%] h-[100vh]">
          <video autoPlay loop>
            <source 
            src="https://jrc-media-v1.s3.ap-south-1.amazonaws.com/jrc2021/banner/v1/ar-video2.mp4"
            type="video/mp4"
            />
          </video>
        </div>
      </div>
      {/* simple step */}
      <div className=" w-[100%] h-[100vh] flex justify-center mt-4 ">
        <div className="w-[95%] flex flex-col items-center space-y-10 ">
          {/* headline  */}
          <div className="text-3xl w-[95%] text-center opacity-70">
            <p>
              Follow our simple step-by-step guide to seamlessly visualize rugs
              in your room using our AR tool.
            </p>
          </div>
          {/* img step  */}
          <div className="flex justify-center space-x-14 w-[95%]">
            <div className="bg-grey-130 flex flex-col items-center w-[29%]">
              <img height='670px' width='410px' src="https://jrc-media-v1.s3.ap-south-1.amazonaws.com/jrc2021/banner/v1/rug-step1.jpg" />
              <h2 className="text-2xl p-3 mt-3">STEP 1</h2>
              <p className="w-[40%] text-center pb-6 opacity-60">Upload image of your room</p>
            </div>
            <div className="bg-grey-130 flex flex-col items-center w-[29%]">
              <img height='670px' width='410px' src="https://jrc-media-v1.s3.ap-south-1.amazonaws.com/jrc2021/banner/v1/rug-step2.jpg" />
              <h2 className="text-2xl p-3 mt-3">Step 2</h2>
              <p className="w-[40%] text-center pb-6 opacity-60">Upload image of your room</p>
            </div>
            <div className="bg-grey-130 flex flex-col items-center w-[29%]">
              <img height='670px' width='410px' src="https://jrc-media-v1.s3.ap-south-1.amazonaws.com/jrc2021/banner/v1/rug-step3.jpg" />
              <h2 className="text-2xl p-3 mt-3">Step 1</h2>
              <p className="w-[40%] text-center pb-6 opacity-60">Upload image of your room</p>
            </div>
          </div>
          <button className=" bg-red-600 p-2 text-white w-[13%] text-base opacity-70 ">TRY NOW</button>
        </div>
      </div>
    </div>
  );
};
export default ViewIn;
