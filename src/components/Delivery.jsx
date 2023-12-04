function Delivery() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[550px] my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="img-quick"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text3xl font-bold py-2">
            Limitless Convenience On-Demand
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dolore assumenda ut inventore maxime aliquid fuga nam vitae harum
            ullam soluta asperiores fugiat temporibus iste laudantium accusamus
            magnam, error quibusdam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officiis eum quibusdam ullam earum dolores neque
            id, voluptatibus, quae culpa placeat praesentium ipsa perspiciatis
            eveniet fugiat quos quod nesciunt sint aliquam?
          </p>
          <button className="bg-black text-[#00df9a] w--[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:opacity-[.7]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
